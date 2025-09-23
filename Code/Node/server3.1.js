const http=require('http');
const url=require('url');
const url_link = 'https://www.youtube.com/feed/history'
const link = url.parse(url_link, true)
console.log(link);
console.log(link.query);
console.log(link.pathname);



const server = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<h2>server is start</h2>');
    res.write('<h1> url parsing decoding </h1>');
    res.end()
})

const PORT = 3000;
const HOST = '127.0.0.1';

server.listen(PORT,HOST,()=>{
    console.log('server is up...!!!!!...');
    
})