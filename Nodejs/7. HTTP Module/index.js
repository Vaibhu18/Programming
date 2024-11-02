import http from "http"
const server = http.createServer((req, res)=>{
    // console.log(server)
    res.write("<h1>Hello, world!</h1>");
})

server.listen(3000,()=>{
    console.log("Server listening on port 3000")
})