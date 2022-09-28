const express=require('express') 
const cors=require('cors')
const mongoose=require('mongoose')  
const bodyParser=require('body-parser')
const app=express() 

const employeeRouter=require('./routes/employeeRoutes')

app.use(cors()) 
app.use(bodyParser.json())
// http://localhost:5000
app.get('/',(req,res)=>{
    res.send('Hello Welcome to Express server')
})
// http://localhost:5000/api
app.use('/api',employeeRouter)

mongoose.connect('mongodb://localhost:27017/crud',{
         useNewUrlParser:true,
         useUnifiedTopology:true
})

const db=mongoose.connection

db.on('error',console.error.bind(console,"connection error"))

db.once("open",function(){
    console.log("connected successfully")
})

app.listen(5000,()=>{
    console.log("server is running on port :5000")
})

