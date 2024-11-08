const PROTO_PATH = '../todo.proto'

const grpc = require("@grpc/grpc-js")
const protoLoader = require("@grpc/proto-loader")

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})

const TodoService = grpc.loadPackageDefinition(packageDefinition).TodoService
const client = new TodoService(
    "localhost:50051",
    grpc.credentials.createInsecure()
)

module.exports = client