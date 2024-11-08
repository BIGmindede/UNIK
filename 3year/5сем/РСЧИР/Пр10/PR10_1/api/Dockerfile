FROM golang:1.20-alpine as build

WORKDIR /usr/local/src

RUN apk --no-cache add bash git make gcc gettext musl-dev

COPY go.mod go.sum ./

RUN rm -rf /go/pkg/mod

RUN go mod download

COPY . .

RUN go build -o ./bin/app main.go

FROM alpine

COPY --from=build /usr/local/src/bin/app /

CMD ["/app"]