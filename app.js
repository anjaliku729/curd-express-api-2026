const express = require("express")
// console.log(express)
const app = express()
//const PORT =3000
const web = require('./routes/web')
const connectDB = require('./config/connectdb')
const cookieParser = require("cookie-parser")
require("dotenv").config();
const PORT = process.env.PORT || 3000


//cookie parser
app.use(cookieParser())


//connectdb
connectDB()


//json data postman se data
app.use(express.json())

// http://localhost:3000/api
app.use('/api',web)


//server create
app.listen(process.env.PORT,()=>{
    console.log(`server start localhost:${process.env.PORT}`);
})