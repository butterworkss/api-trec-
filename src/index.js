const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./connection/connection.js')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 4000;


app.use(bodyParser.json())
app.use(cors())

app.use(require('./route/route.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})