const http=require('http');
const arg=process.argv;
const port=arg[2];
http.createServer((req,resp)=>{

    resp.write("Writing the response of my commandline");
    resp.end();
}).listen(port);
