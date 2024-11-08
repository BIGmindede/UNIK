FROM python:3.10-alpine3.17

WORKDIR /var/www

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
EXPOSE 8000
COPY ./../ ./
RUN pip3 install poetry
RUN poetry install


CMD python3 manage.py runserver