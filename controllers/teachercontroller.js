const TeacherModel = require('../models/teacher')



const createTeacher = async (req, res) => {
    try {
      //console.log(req.body)
      const{name,email,phone} = req.body;


       await TeacherModel.create({
        name,
        email,
        phone
      });
      res.json("teacher insert")

    } catch (error) {
        console.log(error)
    }
}


// const displayTeacher = async (req, res) => {
//     try {
//         res.send("displayTeacher")

//     } catch (error) {
//         console.log(error)
//     }
// }



const getTeacher = async (req,res) => {
    try{
        const teacher = await TeacherModel.findOne()
        res.json(teacher)

    }catch (error) {
        console.log(error)
    }
}



const viewTeacher = async (req,res) => {
    try {
        const id = req.params.id
        //console.log(id)
        const teacher = await TeacherModel.findById(id)
        res.json(teacher)

    }catch (error) {
        console.log(error)
    }
}




const updateTeacher = async (req,res) => {
  try  {
    const id = req.params.id
    //console.log(id)

    const {name,email} = req.body
    await TeacherModel.findByIdAndUpdate(id,{
        name,
        email
    })
    res.json("update success")
  }catch (error) {
    console.log(error)
  }
}


const deleteTeacher = async (req,res) => {
   try {
const id = req.params.id
await TeacherModel.findByIdAndDelete(id)
res.json("delete Success")

    }catch (error) {
        console.log(error)
    }
}




module.exports = {
    createTeacher,
    getTeacher,
    viewTeacher,
    updateTeacher,
    deleteTeacher
}
