
const express = require('express');
const url = require('url')

const app = express();
// app.use(express.urlencoded({extended:true}))

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

// app.get('/saveform', (req, res) => {
//     const urldata = url.parse(req.url,true);
//     console.log(urldata.query);
//     const obj = {urldata:urldata.query}
//     res.render('data.ejs', obj)
// })

// app.post('/saveform', (req, res) => {
//     const urldata = req.body;
//     console.log(urldata);
//     const obj = {urldata:urldata}
//     res.render('data.ejs',obj)
    
// })

app.post('/saveform', (req, res) => {
    const urldata = req.body
    console.log(urldata);
    const obj = {urldata:urldata}
    res.render('data.ejs',obj)
    
})
const PORT = 3000;
const HOST = '127.0.0.1';
app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
})


