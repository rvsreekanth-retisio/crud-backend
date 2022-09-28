const mongoose=require('mongoose')

const employeeschema=new mongoose.Schema({
    employeeID:{type:Number,required:true},
    employeeName:{type:String,required:true},
    Email:{type:String,required:true},
    Department:{type:String,required:true}
})

const employeeModel=mongoose.model("employee",employeeschema)

module.exports= {employeeModel}