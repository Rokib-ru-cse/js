const express = require('express')
const connection = require('./db/connection')
const userAuthRoutes = require('./routes/userAuthRoutes')







const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))






app.use('/api',userAuthRoutes)








const PORT = process.env.PORT || 8080
connection()
app.listen(PORT,(res)=>{
    console.log(`server is running on port : ${PORT}`)
})



