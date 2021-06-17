const express = require('express')
const app = express()
let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/api/home',require('./components/home'))
app.use('/api/auth',require('./components/auth'))

app.listen(5500)