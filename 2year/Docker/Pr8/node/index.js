const http = require('http')

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Khitrov Nikita IKBO-20-21')
})

server.listen(3000, "localhost", () => {
    console.log("Server is successfully started and working on 3000 port")
})