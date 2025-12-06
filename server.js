const express = require('express')
const app = express()

const db = require('./config/database.js')
const port = process.env.PORT||8080

app.get("/",(req,res)=>{
    res.send("Salam dünya")
})

db.authenticate()
  .then(() => {
    console.log("✅ Neon-a bağlandı")
  })
  .catch((err) => {
    console.error("❌ DB Xətası:", err.message)
  })

app.listen(port,()=>{
    `Server ${port} da bashladildi`
})