const http=require('http');
const age=20;
http.createServer((req,resp)=>{
    resp.setHeader("Content-type","text/html");
    resp.write(`<html>
        <head>
        <title>TejuNodeDoc</title>
        </head>
        <body>
        <h1>I'm Tejaswi</h1>
        <h2>`+age+`</h2>
        <h2>`+new Date()+`</h2>
        </body>
        </html>`)
   resp.end();
}).listen(5300);