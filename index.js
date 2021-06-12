const express = require('express')
const app = express()

app.use('/',require('./components/home'))

app.listen(5500)