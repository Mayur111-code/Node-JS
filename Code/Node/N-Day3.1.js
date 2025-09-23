const http = require('http');
const result = require('./Calculator');
const { write } = require('fs');
// const new = require('./Calculator')

const app = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<h3> node js </h3>")


    console.log(result.sum (10,30,40));
    res.write(`
        <h1>name ${result.obj.name}</h1>

        `)

    res.end()
})

const PORT = 5000;
const HOST = '127.1.1.7';

app.listen(PORT,HOST,()=>{
    console.log(`this is ${PORT}`);
    
})

// const http = require('http');
// const ress = require('./Calculator'); 

// const app = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("<h3>Node.js Server</h3>");

    
//     console.log(ress(10, 30, 40)); 

//     res.end();
// });

// const PORT = 5000;
// const HOST = '127.0.0.1';

// app.listen(PORT, HOST, () => {
//     console.log(`Server is running at http://${HOST}:${PORT}`);
// });