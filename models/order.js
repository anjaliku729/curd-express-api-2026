const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    name:{
        type:"String"
    },
    price:{
        type:"String"
    },
    qty:{
        type:"String"
    }
})
const OrderModel = mongoose.model('order',OrderSchema)
module.exports =OrderModel