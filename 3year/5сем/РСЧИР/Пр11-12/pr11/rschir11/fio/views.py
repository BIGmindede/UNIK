import base64
import io
import json

import matplotlib
import requests
from django.core.cache import cache
from django.http import HttpResponse
from django.views.decorators.cache import cache_page
from rest_framework.views import APIView


class FIOApiView(APIView):
    def get(self, request):
        name = request.GET.get("name", 'Незнакомец')
        return HttpResponse(f"Hello, {name}")


import matplotlib.pyplot as plt
import numpy as np
from matplotlib.backends.backend_agg import FigureCanvasAgg
from django.http import HttpResponse


def analyze(request):
    matplotlib.use('agg')

    from matplotlib import pyplot as plt
    telephones = requests.get('http://localhost:8080/telephones').json()

    vendors = [tel["name"] + "\nven" + tel["vendor_name"][-1] for tel in telephones]
    prices = [tel["price"] for tel in telephones]

    plt.bar(vendors, prices)
    plt.ylabel('Price')
    plt.title('Price by Vendor')
    plt.show()

    # The trick is here.
    f = io.BytesIO()
    plt.savefig(f, format="png", facecolor=(0.95, 0.95, 0.95))
    encoded_img = base64.b64encode(f.getvalue()).decode('utf-8').replace('\n', '')
    f.close()

    return HttpResponse('<img src="data:image/png;base64,%s" />' % encoded_img)



