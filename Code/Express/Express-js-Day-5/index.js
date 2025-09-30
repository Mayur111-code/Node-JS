 const express = require('express');
 const app = express()

const url =require('url');

app.use(express.urlencoded({extended:true}));


 app.set('view engine','ejs')

 app.get('/', (req, res) => {
   res.render('home.ejs') 
 })

//  app.get('/saveform', (req, res) => {
//     const result=url.parse(req.url,true)
//     console.log(result.query);
//     const obj = {data:result.query}
//     res.render('card.ejs',obj)
//  })

 app.post('/saveform', (req, res) => {
    const result = req.body; 
    console.log(result);
    const obj = {data:result}
    res.render('card.ejs',obj)
    
 })

 

 const PORT =3000;
 const HOST ='127.0.0.1';
 app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
    
 })