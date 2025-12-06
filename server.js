const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express()
const db = require('./config/database.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT||8080

app.get("/",(req,res)=>{
    res.send("Salam dünya")
})

app.listen(port,()=>{
    `Server ${port} da bashladildi`
})