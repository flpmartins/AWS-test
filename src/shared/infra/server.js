require('dotenv').config()

const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express()

app.use(express.json())

app.use('/aws', express.static(path.join(__dirname, 'pages')));

app.use('/health', (request, response) => {
  return response.json({ msg: true })
})
app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running ${process.env.PORT}`)
})