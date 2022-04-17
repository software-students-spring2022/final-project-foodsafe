const mongoose = require('mongoose');
const Product = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    image: {type: String},
    allergy: {type: String},
    ingredients: [{type: String}],
    keywords: [{type: String}],
});


//this is the user schema
const User = new mongoose.Schema({
    userName:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    groceryList:[Product],
    myALlergy:{
        required:true,
        type:[]
    },
    groceryHistory:[]
})

module.exports = mongoose.model('Product',Product)
