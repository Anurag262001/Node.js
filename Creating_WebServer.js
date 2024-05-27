//import the http module
const http = require('http');
//create the server this will take calllback fun of two params :-req and res
const createServer = http.createServer((req,respo)=>{
    respo.end('<h1>hello from the serve</h1>');
    console.log("new message recieved");
})
//start the server will take three argument portnumber , hostname , callback function
createServer.listen(8000,'127.0.0.1', ()=>{
    console.log("server started")
})