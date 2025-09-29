const http =require('http');
const app = http.createServer((req,res)=>{
res.writeHead(200,{"content-type":"text/html"});
res.write("hi");
res.end();
})

const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
    
})

