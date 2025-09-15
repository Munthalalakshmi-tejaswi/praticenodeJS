const http=require('http');
http.createServer((req,resp)=>{
//   console.log(req.headers.host);
//   resp.write("<h1>Home Page</h1>")
if(req.url=="/"){
    resp.write("<h1>Home Page</h1>");
}
else if(req.url=="/login"){
    resp.write("<h1>Login Page</h1>");
}
else if(req.url=="/contact"){
    resp.write("<h1>Contact Page</h1>");
}
else{
    resp.write("other page");
}
  resp.end();
}).listen(5800);