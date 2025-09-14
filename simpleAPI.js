const http=require('http');
const userDatas=[
    {
     name:"Teju",
     age:20,
     email:"mltejaswi1@gmail.com"
},
{
    name:"Suma",
    age:15,
    email:"sumateju@gmail.com"
}
]
http.createServer((req,resp)=>{
   resp.setHeader("Content-Type","application/json");
   resp.write(JSON.stringify(userDatas));
   resp.end();
}).listen(6200);
