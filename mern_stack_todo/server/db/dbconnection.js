// const mongoose = require('mongoose');

// const DB = 'mongodb://localhost:27017/todo';

// module.exports.connection = ()=>{
//     mongoose.connect(DB,{
//         useNewUrlParser:true,
//         useFindAndModify:true,
//         useUnifiedTopology:true
//     })
//     .then((coon)=>{
//         console.log('database is connected')
//     })
// }

const mongoose = require('mongoose');
// const DB = 'mongodb://localhost:27017/todos'
const DB = 'mongodb://rokib:rokib@cluster0-shard-00-00.k1v7d.mongodb.net:27017,cluster0-shard-00-01.k1v7d.mongodb.net:27017,cluster0-shard-00-02.k1v7d.mongodb.net:27017/todos?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'

module.exports.connection = ()=>{
    mongoose.connect(DB,{
        useNewUrlParser:true,
        useFindAndModify:true,
        useUnifiedTopology:true

    })
    .then((res)=>{
        console.log('db is connected')
    })
}



// const mongoose = require('mongoose')
// const connection = ()=>{ mongoose.connect('mongodb://localhost:27017/todos',{
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// })
// .then((conn)=>{
//     console.log('db is connected');
// })
// }
// module.exports = {connection}