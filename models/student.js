// const mongoose = require ("mongoose");

// const StudentSchema = mongoose.Schema({
//     name: {
//         type:"String"
//     },
//     email:{
//         type:"String"
//     },
// })
// const StudentModel = mongoose.model('student',StudentSchema)




// module.exports = StudentModel





const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }
});

const StudentModel = mongoose.model("student", StudentSchema);

module.exports = StudentModel;