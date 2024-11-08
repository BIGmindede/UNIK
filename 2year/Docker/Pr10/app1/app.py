from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def index():
    response = requests.get("http://container2:8081")
    return response.text

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8080)

    