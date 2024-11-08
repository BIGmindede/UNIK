FROM couchbase:6.5.0
ENV CB_ADMIN_USER=admin \
    CB_ADMIN_PASS=password \
    CB_BUCKET=default \
    CB_BUCKET_TYPE=couchbase \
    CB_BUCKET_PORT=11211 \
    CB_BUCKET_RAMSIZE=512 \
    CB_SERVICES=data,index,query,fts \
    CB_HOSTNAME=localhost
COPY configure-node.sh /
RUN chmod 755 /configure-node.sh
CMD [ "/configure-node.sh" ]

