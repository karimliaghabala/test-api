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

db.authenticate()
  .then(() => {
    console.log("✅ Neon-a bağlandı")
  })
  .catch((err) => {
    console.error("❌ DB Xətası:", err.message)
  })
  app.use("/", require('./router/userrouter.js'))

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: err.message })
})

if (require.main === module) {
  app.listen(port, () => {
    console.log("8080 portunda işləyir 🚀")
  })
}

module.exports = app