const express = require('express')
const fs = require('fs');
const app = express()
const connection = require('./db/db')
const path = require('path')
const userRouter = require('./routes/user')
const categoryRouter = require('./routes/category')
const roomRouter = require('./routes/room')
const cors = require('cors')
// middlewares
app.use(express.json())
app.use(cors())
try {
    fs.mkdirSync(path.join(__dirname, 'uploads'))
} catch (err) {
    if (err.code !== 'EEXIST') throw err
}
app.use('/api/public', express.static(path.join(__dirname, 'uploads')))
app.use('/api', userRouter)
app.use('/api', categoryRouter)
app.use('/api',roomRouter)

connection()
app.listen(process.env.PORT || 4000, () => {
    console.log('server is running on port 4000');
}) 