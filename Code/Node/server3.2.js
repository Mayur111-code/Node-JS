const http = require('http');
const url = require('url');

// const result = url.parse('https://www.youtube.com/', true)
// console.log(result);


const myserver = http.createServer((req, res)=>{
    res.writeHead(200,{"content-type":'text/html'})
    res.write("<h1>live server</h1>")
    res.write("url parsing")

    const result = url.parse(req.url, true);
    console.log(result);
    

    res.end()
})

const PORT = 3000;
const HOST = '127.0.0.1';

myserver.listen(PORT,HOST,()=>{
    console.log(`your server running is ${HOST} : ${PORT}`);
    
})