// const mongoose = require('mongoose');
// const {Schema} = mongoose;

// const todoschema = new Schema({
//     title: String,
//     description: String
// },{
//     timestamps:true
// })

// const todos = mongoose.model('todos',todoschema);

// module.exports = todos

const mongoose = require('mongoose');
const {Schema} = mongoose;

const todoschema = new Schema({
    title:String,
    description:String
},
{
    timestamps:true
})


const Todo  = mongoose.model('todos',todoschema);

module.exports = Todo