// const express=require('express')
// const nav =  (`
//         <ul>
//         <li> <a href='/'> Home </a> </li>
//         <li> <a href='/about'> About </a> </li>
//         <li> <a href='/contact'> Contact </a> </li>
//         <li> <a href='/services'> Services </a> </li>
//         </ul> 
//         `)

// const app = express();
// app.get("/", (req, res)=>{
//     res.send( nav+"<h1>Express Js Home Page</h1>")
// });
    
// app.get("/about",(req,res)=>{
//     res.send(nav+ "<h1>About Us</h1>")
// })

// app.get('/contact', (req, res) => {
//     res.send(nav+ "<h1>Contact Page </h1>")
// })

// app.get('/services', (req, res) => {
//     res.send(nav+ "<h1>Services Page</h1>")
// })

// const PORT = 5000;
// const HOST = '127.0.0.1';

// app.listen(PORT,HOST,()=>{
//     console.log(`http://${HOST}:${PORT}`);
    
// })

//import
// const express = require('express');

// //initilize express
// const app = express()

// app.get('/',(req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"})
//     res.write("<h1>javascript </h1>")
//     res.write("<h1>server express js</h1>");
//     res.end()
// });

// const PORT = 3000;
// const HOST = '127.0.0.1';

// app.listen(PORT,HOST,()=>{
//     console.log(`live server http://${HOST}:${PORT}`);
    
// })

const express = require('express');
const app = express();

const menu = `

<ul>

<li> <a href='/'> Home </a> </li>
<li> <a href='/about'> About </a> </li>

</ul>

`

app.get('/',(req,res)=>{
    res.send(menu + '<h1>Express js Module</h1>')
});

app.get('/about',(req,res)=>{

    const obj = {
        id:1,
        name:'jhon',
        skill:'react',
        add:'nashik'
    }
    res.send(obj)

    // res.send( menu + `<h1>About</h1>`)
});

//fallback rounting
app.use((req, res)=>{
    res.send(`not found`)
})
const PORT = 3000;
const HOST = '127.0.0.1';
app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
});