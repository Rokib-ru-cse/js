const mongoose = require('mongoose')
const env = require("dotenv");
env.config();

// const DB = `mongodb://localhost:27017/flipkart`

const DB = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.k1v7d.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
const connection = ()=>{
    mongoose.connect(DB,{
        useNewUrlParser:true,
        useFindAndModify:false,
        useCreateIndex:true,
        useUnifiedTopology:true,
    })
    .then((res)=>{
        console.log("db is connected")
    })
}     
 
module.exports = connection

 
