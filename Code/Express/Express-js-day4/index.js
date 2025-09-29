const express = require('express');
const app = express()
const url = require('url')

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/saveform', (req, res) => {
    const data = url.parse(req.url,true);
    console.log(data.query);
    const obj = {data:data.query}
    res.render(`studentform.ejs`,obj)
    
})

const PORT = 3000;
const HOST = '127.0.0.1';
app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
})




















