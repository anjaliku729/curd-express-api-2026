const StudentModel = require ('../models/student')


const createStudent = async (req,res) => {
    try {
        //console.log(req.body)
        const{name,email} = req.body

        await StudentModel.create({
            name,
            email
        })
        res.json("student insert")

    }catch (error) {
        console.log(error)
    }
}


const getStudent = async (req,res) => {
    try{
        const student = await StudentModel.find()
        res.json(student)

    }catch (error) {
        console.log(error)
    }
}

const viewStudent = async (req,res) => {
   try {
    const id = req.params.id
    //console.log(id)
    const student = await StudentModel.findById(id)
    res.json(student)

    }catch (error) {
        console.log(error)
    }
}

const updateStudent = async (req,res) => {
  try  {
    const id = req.params.id
    //console.log(id)

    const {name,email} = req.body
    await StudentModel.findByIdAndUpdate(id,{
        name,
        email
    })
    res.json("update success")
  }catch (error) {
    console.log(error)
  }
}


const deleteStudent = async (req,res) => {
   try {
const id = req.params.id
await StudentModel.findByIdAndDelete(id)
res.json("delete Success")

    }catch (error) {
        console.log(error)
    }
}


module.exports = {
    createStudent,
    getStudent,
    viewStudent,
    updateStudent,
    deleteStudent
}