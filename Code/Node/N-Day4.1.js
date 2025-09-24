const http=require('http')
const url=require('url');

const app =http.createServer((req,res)=>{


    const urldata=url.parse(req.url, true);
    console.log(urldata);
    console.log(urldata.pathname);
    

    res.writeHead(200,{"content-type":"text/html"})
    //header se
    res.write("<h1>Express js Module</h1>");

    res.end()
})

const PORT = 3000;
const HOST ='127.0.0.1';

app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
})