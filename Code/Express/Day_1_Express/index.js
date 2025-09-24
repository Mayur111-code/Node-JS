const express = require('express');

const app = express()

//routing 
// // app.get('path/route',()=>{})
    app.get('/',(req, res)=>{

        // res.writeHead(200,{'content-type':'text/html'})
        // res.write("<h1>Welcome to express js </h1>")
        // res.end()
        res.send('<h2>node js rsponse send </h2>')
        
    })

    const PORT = 3000;
    const HOST = '127.0.0.1';

    app.listen(PORT,HOST,()=>{
        console.log(`server is live http://${HOST}:${PORT}`);
        
    })