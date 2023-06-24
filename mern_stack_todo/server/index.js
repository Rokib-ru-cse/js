// const express = require('express');
// const app = express();
// const {connection} = require('./db/dbconnection');
// const todosroute = require('./route/todos');

// connection();

// app.use('/todos',todosroute);





// app.listen(5000,(res)=>{
//     console.log('server is running on port 5000');
// }) 


// const express = require('express')
// const app = express();
// const {connection} = require('./db/dbconnection')
// const todosroute = require('./route/todos');
// app.use(express.json())

// connection();
// app.use('/todos',todosroute);

// app.listen(8000,()=>{
//     console.log('server is running on port 8000')
// })

const express = require('express')
const app = express();
const {connection} = require('./db/dbconnection')
const todosroutes = require('./route/todos')
var cors = require('cors')
app.use(cors());
app.use(express.json());

connection();
app.use('/todos',todosroutes)



app.listen(8000,()=>{
    console.log('server is running on port 8000')
})





