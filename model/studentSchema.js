const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    FullName:String,
    Email:String,
    ContactNumber:Number,
    Course:String,
    BatchCode:Number,
    Remarks:String
})

module.exports=mongoose.model("students", studentSchema);
