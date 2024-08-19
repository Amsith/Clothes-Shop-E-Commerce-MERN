const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    title:{type:String, required:true},
    price:{type:Number, required:true},
    discountprice:{type:Number, required:true},
    about:{type:String, required:true},
    category:{type:String,enum:['Mens', 'Womens', 'Kids'], required:true},
    image:{type:String, required:true},

},{timestamps:true})

const productModel = mongoose.model("product",productSchema)

module.exports = productModel;