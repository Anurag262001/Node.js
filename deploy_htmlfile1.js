const http = require('http');
const fs = require('fs');
const filedata = fs.readFileSync('./htmlfile/index1.html','utf-8');
const server = http.createServer((req,respo)=>{
    respo.end(filedata);
});
server.listen(8000,'127.0.0.1',()=>{
   console.log("server established");
})
//here only html file is being accessed so the req send by the server is two one is at of portnumber and second is of favicon
//if html is using and other resource like css or js then req will send to them also
