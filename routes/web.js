const express = require('express')
const route = express.Router()
const { createStudent, getStudent, viewStudent, updateStudent,deleteStudent } = require('../controllers/studentController')
const { displayTeacher, createTeacher, getTeacher, viewTeacher, updateTeacher,deleteTeacher } = require('../controllers/teachercontroller')
const { getallEmployees, createEmployee, viewEmployees, updateEmployees, deleteEmployees} = require('../controllers/employeeController')

const { registerUser, loginUser, logout, profile } = require('../controllers/userController')

const { isAuthrized } = require('../middleware/auth')



//employee controller

route.get('/employee',getallEmployees)
route.post('/createEmployee',createEmployee)
route.get('/viewEmployee/:id', viewEmployees)
route.put('/updateEmployee/:id', updateEmployees)
route.delete('/deleteEmployee/:id', deleteEmployees)

//http://localhost:3000/api/student
route.post('/createStudent', createStudent)
route.get('/student', getStudent)
route.get('/viewstudent/:id', viewStudent)
route.put('/updateStudent/:id', updateStudent)
route.delete('/deleteStudent/:id', deleteStudent)




//////teacher controller -----------http://localhost:3000/api/teacher
//route.get('/teacher',displayTeacher)
route.post('/createteacher', createTeacher)
route.get('/teacher', getTeacher)
route.get('/viewteacher/:id', viewTeacher)
route.put('/updateteacher/:id', updateTeacher)
route.delete('/deleteteacher/:id', deleteTeacher)



/////user router

route.post('/registerUser', registerUser)
route.post('/loginUser', loginUser)
route.get('/logout', logout)


//profile route
route.get('/profile', isAuthrized, profile)



module.exports = route