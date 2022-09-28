const {employeeModel} =require('../models/EmployeeDb')


const getData= async(body) =>{
   let employees =await employeeModel.find({})
   console.log(employees)
   return employees
}

const createData=async(body) =>{
    console.log(body)
    console.log(body.employeeID)
    let newEmployee= await new employeeModel({

         employeeID:body.employeeID,
         employeeName:body.employeeName,
         Email:body.Email,
         Department:body.Department

    })

    const employee=await newEmployee.save()
    return employee
} 

const updateData=async (body,id) =>{
    console.log(body)
    console.log(id)
    let employee =await employeeModel.updateOne({employeeID:id},{$set:{ employeeID:body.employeeID,
        employeeName:body.employeeName,
        Email:body.Email,
        Department:body.Department}},{new:true})
    return employee

}

const deleteData=async (id)=>{
  let employee=await employeeModel.deleteOne({employeeID:id})
  return employee
}

module.exports={getData,createData,updateData,deleteData}
