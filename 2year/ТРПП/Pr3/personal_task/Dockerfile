FROM ubuntu:20.04

RUN apt update \
    && apt install -y python3 jq \
    && cd /usr/bin \
    && ln -s python3 python

ADD ./data /mnt/files

EXPOSE 8000

CMD ["python", "-m", "http.server", "-d", "/mnt/files", "8000"]