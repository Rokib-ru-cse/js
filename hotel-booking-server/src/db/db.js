const mongoose = require('mongoose')

// const DB = 'mongodb://localhost:27017/cheaper-hotel'
const DB = `mongodb+srv://rokib:rokib@cluster0.k1v7d.mongodb.net/cheaper-hotel?retryWrites=true&w=majority`

const connection = ()=>{
    mongoose.connect(DB,{
        useNewUrlParser:true,
        useFindAndModify:false,
        useCreateIndex:true,
        useUnifiedTopology:true,
    },()=>{
        console.log('database is connected');
    })
}

module.exports = connection 