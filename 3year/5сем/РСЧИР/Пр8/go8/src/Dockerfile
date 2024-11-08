FROM golang:1.21.3

RUN mkdir -p /go/src/app

WORKDIR /app

COPY . .

RUN go build -o app

CMD ["./app"]
