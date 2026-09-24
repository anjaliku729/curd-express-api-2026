// const mongoose = require ("mongoose");

// const StudentSchema = mongoose.Schema({
//     name: {
//         type:"String"
//     },
//     email:{
//         type:"String"
//     },
// })
// const TeachertModel = mongoose.model('teacher',teacherSchema)




// module.exports = StudentModel




const mongoose = require("mongoose");

const TeacherSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
});

const TeacherModel = mongoose.model("teacher", TeacherSchema);

module.exports = TeacherModel;