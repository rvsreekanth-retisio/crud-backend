const express=require('express')
const router=express.Router()
const {getEmployees,addEmployee,updateEmployee,deleteEmployee}=require('../controllers/employeeController')


router.get('/',(req,res)=>{
    res.send('Hello Welcome to routes')
})

router.route('/employees').get(getEmployees)

router.route('/addEmployee').post(addEmployee)

router.route('/updateEmployee/:id').put(updateEmployee)

router.route('/deleteEmployee/:id').delete(deleteEmployee)

module.exports=router