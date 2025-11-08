const express = require('express');

const app = express();

app.use(express.static("public/"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var url = require('url');


const connection = require("./config/db");

const students = require("./model/studentSchema");


app.get('/', (req, res) => {
    res.render("registration.ejs");
});


app.post('/saveform', async (req, res) => {

 try {
    const data = new students (req.body);
     await data.save();
        console.log("data is saved succesfully");
        res.redirect("/studentdata")
    } catch (error) {
        console.log("data is not saved", error);
    }

})

app.get('/studentdata', async (req, res) => {
    try {
        const data = await students.find();
        res.render("studentdata.ejs",{data});
    } catch (error) {
        console.log("Error fetching student data", error);
        res.send("Something went wrong while fetching data");
    }
})


app.post('/delete/:id', async (req, res) => {
    try {
       
        await students.findByIdAndDelete(req.params.id);
        res.redirect("/studentdata");
        console.log("DB iS delete")
    } catch (error) {
        console.log("db is not delete");
    }
})



app.get('/edit/:id', async (req, res) => {
    const result = await students.findById(req.params.id);

    const obj = {data: result}
    res.render("edit.ejs", obj)   
})


app.post('/updatestudent/:id', async (req, res) => {
    try {
        await students.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/studentdata");
    } catch (error) {
        console.log("data update failed")
    }
})

const PORT = 3000;
const HOST = '127.0.0.1';


app.listen(PORT,HOST,()=>{
    console.log(`http://${HOST}:${PORT}`);
})