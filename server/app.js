const express = require('express')
const cors = require('cors')
const shoesRouter = require('./routes/shoes.routes');

require('dotenv').config()
const app = express()

app.use(express.json({limit:'20kb'}))
app.use(express.urlencoded({extended:true,limit:'20kb'}))
app.use(cors())

//routes
app.use('/api/shoes',shoesRouter)

const PORT = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send("hello world welcome to shoes ")
})
module.exports =app