const express=require('express')
const { create } = require('../models/EmployeeDb')
const {getData,createData,updateData,deleteData} =require('../services/employeeService')

const getEmployees=async(req,res)=>{
    const employees =await getData(req.body)
     res.send(employees)
}

const addEmployee=async (req,res)=>{
    console.log(req.body)
   const newEmployee=await createData(req.body)
   res.send(newEmployee)
}


const updateEmployee=async (req,res)=>{
    console.log(req.body)
    console.log(req.params)

    const modifiedEmployee=await updateData(req.body,req.params.id)
    res.send(modifiedEmployee)

}

const deleteEmployee=async (req,res)=>{
    const data =await deleteData(req.params.id)
    res.send(data)

}

module.exports ={getEmployees,addEmployee,updateEmployee,deleteEmployee}