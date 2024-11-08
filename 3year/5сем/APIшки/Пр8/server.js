const PROTO_PATH = "./todo.proto";

var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

var todoProto = grpc.loadPackageDefinition(packageDefinition);
const { v4: uuidv4 } = require("uuid");
const server = new grpc.Server();
var todos = [
    {
        id: "10f4714c3-978a-4a76-8264-03ffe7d13e4f",
        title: "todo1",
        content: "adsgl'ash'gna"
    },
];
server.addService(todoProto.TodoService.service, {
    getAll: (_, callback) => {
        callback(null, { todos });
    },
    get: (call, callback) => {
        let todo = todos.find(n => n.id == call.request.id);
        if (todo) {
            callback(null, todo);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Не найдено"
            });
        }
    },
    insert: (call, callback) => {
        let todo = call.request;
        todo.id = uuidv4();
        todos.push(todo);
        callback(null, todo);
    },
    update: (call, callback) => {
        let todo = todos.find(n => n.id == call.request.id);
        if (todo) {
            todo.title = call.request.title;
            todo.content = call.request.content;
            callback(null, todo);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Не найдено"
            });
        }
    },
    remove: (call, callback) => {
        let todoId = todos.findIndex(
            n => n.id == call.request.id
        );
        if (todoId != -1) {
            todos.splice(todoId, 1);
            callback(null, {});
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: `Не найдено${call.request.id}`
            });
        }
    }
});
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
      console.error(`Failed to start server: ${error}`);
      return;
    }
    console.log(`Server started, listening on port ${port}`);
    server.start();
  });