const express = require('express')
const app = express();

const students = [
  { name: "Aarav Mehta", rollNo: "101", course: "ExpressJS", batch: "10-12 AM" },
  { name: "Riya Sharma", rollNo: "102", course: "MongoDB", batch: "12-3 PM" },
  { name: "Rohit Patil", rollNo: "103", course: "NodeJS", batch: "2:30-4:30 PM" },
  { name: "Neha Kulkarni", rollNo: "104", course: "EJS", batch: "5-6 PM" }
];


app.get('/', (req, res) => {
    res.render('home.ejs')
});
app.get('/students',(req, res)=>{
    res.render('students.ejs',{students})
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

const PORT = 3000;
const HOST = '127.0.0.1';
app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
})