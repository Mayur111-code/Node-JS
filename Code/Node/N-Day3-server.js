// https: =>   Network protoval
// www.google.com =>   domain
//  /search =>  path
//  ?q=react+js+jobs+in+pue&rlz=1C1VDKB_enIN1180&oq=react+js+jobs+in+pue =>query 
//  &gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQIxgnGIAEGIoFMgcIAhAAGIAEMgcIAxAAGIAEMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEJMTMyOTZqMGo5qAIGsAIB8QVHLA1PEpXXmQ&
//  sourceid=chrome&ie=UTF-8 =>



//     const http=require('http');
//     const url=require('url');

//     const url_link='https://www.google.com/search?q=url+parse+in+node+js&rlz=1C1GCEA_enIN1165IN1165&oq=url+parse+in&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEINTYxNmowajeoAgiwAgHxBT15vdwUgVnK&sourceid=chrome&ie=UTF-8'
// const result= url.parse(url_link,true)
// console.log(result)

//     const App = http.createServer((req, res)=>{
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write("<h1>node js server</h1>")


//         res.end("<p>response end</p>")
//     })

//     const PORT = 4000;
//     const HOSt = '123.45.0.0'

//     App.listen(4000, ()=>{
//         console.log("SERVER IS UP....!!");
        
//     })


// const http = require('http');
// const url = require('url');

    
// const result = url.parse("http://localhost:5173/referrals", true)
// console.log(result);


// const app = http.createServer((req, res)=>{
//     res.writeHead(200, {"content-type":'text/html'});
//     res.write("<h1>this is the node server</h1>");
//     res.write("<h2>Created a server form mayur</h2>")





//     res.end("<p>server is closed ok </p>")
// })

// const PORT = 3000;
// const HOST = '0000001';

// app.listen(3000,()=>{
//     console.log(`The server is runing is ${PORT} and ${HOST}`);
    
// });


const http = require('http');
const url = require('url');

const link = url.parse('https://nodejs.org/en',true);
console.log(link);

const Myserver = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":'text/html'});
    res.write("<p>this is the server</p>");
    res.end();
});

const PORT=3000;
const HOST='127.0.0.1';
Myserver.listen(PORT, HOST, ()=>{
    console.log(`officaly server is running ${PORT} : ${HOST}`);
    
})