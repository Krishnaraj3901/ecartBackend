// //1. import mongoose
// const mongoose = require ('mongoose')

// //2. define schema for product collections to store products

// const cartSchema = new mongoose.Schema({
//   id:{
//     type:Number,
//     required: true,
//     unique: true
//   },
//   title:{
//     type:String,
//     required:true
//   },
//   price:{
//     type:Number,
//     required:true
//   },
//   image:{
//     type:String,
//     required:true
//   },
//   quantity: {
//        type:Number,
//        required:true
//   },
//   grandTotal:{
//     type:Number,
//     required:true
//   }
// })

// //3 create a model to store products

// const carts = new mongoose.model('carts',cartSchema)

// //4 export the model

// module.exports = cartSchema

// 1 import mongoose
const mongoose = require('mongoose');

// 2 Define Schema for product collection to store products
const cartSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true

    },
    quantity:{
        type:Number,
        required:true

    },
    grandTotal:{
        type:Number,
        required:true
    }
})

//3 Create a Model to store products
const carts = new mongoose.model('carts', cartSchema)

//4 Export the model
module.exports = carts