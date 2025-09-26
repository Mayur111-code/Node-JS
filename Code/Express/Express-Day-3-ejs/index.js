const express = require("express");

const app = express();
// app.get('/', (req, res) => {
//     // res.send(`<h1>Home</h1>`)
// })

app.get('/', (req, res) => {
    res.render(`home.ejs`)
});
app.get('/about', (req, res) => {
    res.render('about.ejs')
})
app.get('/services', (req, res) => {
    res.render('services.ejs')
})
app.get('/features', (req, res) => {
    res.render(`features.ejs`)
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})
const  PORT=3000;
const HOST='127.0.0.1';
app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
    
})
