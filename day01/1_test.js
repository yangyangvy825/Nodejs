var http=require('http');
var serve=http.createServer(
        (req,res)=>{
            //res.writeHead(200,{'Content-type':'text/html'});
            //res.end('<h1 style="color:red">Hello world</h1>')
            res.write("Hello,NodeJs");
            res.end("test")
        }
    )
serve.listen("3000");
//console.log(1+3);
