const http=require("http")
const url=require('url')
const app = http.createServer((req, res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1> Routing Node Js </h1>")
    res.write(`
        <ul>
        <li> <a href='/'> Home </a> </li>
        <li> <a href='/about'> About </a> </li>
        <li> <a href='/contact'> Contact </a> </li>
        <li> <a href='/services'> Services </a> </li>
        </ul> 
        `)

    const result = url.parse(req.url,true);
    if(result.pathname === "/"){
        res.write("<h1> HOME page </h1>")
    } else if(result.pathname === "/about"){
        res.write("<h1> About Page </h1>")
    } else if(result.pathname === "/contact"){
        res.write("<h1> CONTACT Page </h1>")
    } else if(result.pathname === "/services") {
        res.write("<h1> SERVICES Page </h1>")
    }else {
        res.write("<h1> Page Not Found </h1>")
    }
    res.end()
}) 

const PORT = 3000;
const HOST = '127.0.0.1';

app.listen(PORT,HOST,()=>{
    console.log(`server is running http://${HOST}:${PORT}`);
    
})