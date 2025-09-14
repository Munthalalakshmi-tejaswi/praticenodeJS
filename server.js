const http=require('http');
http.createServer((res,resp)=>{
    resp.write("<h1>Hello My name is tejaswi</h1>");
    resp.end("Tejaswi");
}).listen(4500);

http.createServer((res,resp)=>{
    resp.write("<h1>Other server</h1>");
    resp.end("tej");
}).listen(5200);