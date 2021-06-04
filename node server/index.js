const express = require('express')
const app = express()
const config = require('config')
const mongoose = require('mongoose')

app.use("/api/auth", require('./routes/auth.routes'))







const PORT = config.get('port') || 5000

async function start(){
//
try{
   await mongoose.connect(config.get('mongoUrl'),{
      useNewUrlParser: true ,
      useUnifiedTopology: true,
      useCreateIndex: true
})
}catch(e){
   console.log('Server error: ', e.message)
}

app.listen(PORT ,(error) => {
   if(error){
      console.log(error)
   }
})
}
start()






