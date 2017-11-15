const http=require("http");
let server=http.createServer();
// (req,res)=>{
//    res.end("server test...");
//});

server.on("request",(req,res)=>{
    //console.log(req.url);
    //console.log(req.httpVersion);
    //res.write("ok...")
    res.writeHead(200,'succ',"content-type:text/html;charset=utf-8");
    res.write("测试")
})
server.listen(80);