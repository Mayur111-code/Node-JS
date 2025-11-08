const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb://localhost:27017/student-db")
.then(()=>{
    console.log("db is connected")
})
.catch((error)=>{
    console.log("db is not connected", error);
})