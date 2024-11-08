FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN chmod 644 /etc/nginx/nginx.conf

COPY static/*.html /usr/share/nginx/html/

EXPOSE 80