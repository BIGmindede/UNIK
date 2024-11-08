#!/bin/bash
set -m

/entrypoint.sh couchbase-server &

sleep 15

curl -v -X POST http://127.0.0.1:8091/pools/default -d menoryQuota=512 -d indexMemoryQuota=512
curl -v -X POST http://127.0.0.1:8091/settings/web -d port=8091 -d username=$CB_ADMIN_USER -d password=$CB_ADMIN_PASS
curl -v -X POST http://127.0.0.1:8091/node/controller/setupServices -d services=$CB_SERVICES
curl -v -X POST http://127.0.0.1:8091/settings/indexes -d 'storageMode=memory_optimized'
curl -v -X POST http://127.0.0.1:8091/pools/default/buckets -d name=$CB_BUCKET -d bucketType=$CB_BUCKET_TYPE -d ramQuotaMB=$CB_BUCKET_RAMSIZE -d
curl -v -X POST http://127.0.0.1:8091/settigs/stats -d sendStats=false -d enablestats=false -d autoFailoverTimeout=120
curl -v -X POST http://127.0.0.1:8091/settings/indexes -d 'storageMode=memory_optimized'
curl -v -X POST http://127.0.0.1:8091/settings/compaction -d 'viewFragmentationThreshold=50' -d 'parallelCompaction=false'

fg 1

