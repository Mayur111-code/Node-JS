const http =require('http');
const url=require('url');
const routing = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write(`<h1>Routing in Node JS</h1>`);


     const result=url.parse(req.url,true)
    console.log(result);
    //routing
const menu = (`<div>
            <ul style="display:flex gap:10px">
            
            <li> <a href='/'> Home </a> </li>
            <li> <a href='/about'> About </a> </li>
            <li> <a href='/services'> Services </a> </li>
            <li> <a href='/contact'> Contact </a> </li>
            
            </ul>
            </div>`)
             
    if(result.pathname==="/"){
         res.write(menu)
        res.write(`<h1>Home</h1>`);
    } else if(result.pathname === "/about"){
        res.write(menu)
        res.write(`<h1>About Us </h1>`)
    } else if(result.pathname === "/services"){
        res.write(menu)
        res.write(`<h1>Services</h1>`)
    } else if(result.pathname === "/contact"){
        res.write(menu)
        res.write(`<h1>Contact Us</h1>`)
    } else{
        res.write(`<h1>Page not Found</h1>
            <br>
            <h1>Go to Home Page</h1>
            <a href='/'>Home</a>
            `)
            
    }

   
    


    res.end();
});
const PORT = 4000;
const HOST = '127.0.0.1';
routing.listen(PORT,HOST, () => {
    console.log(`Server started on port http://${HOST}:${PORT}`);
});