const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

const bodyParser=require('body-parser')
app.use(express.json())
const cors = require("cors");
app.use(cors())

const router=require('./router')

const optionsConnection = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
 
const mongoose=require("mongoose")
mongoose.connect(process.env.DB_CONNECT,optionsConnection)
.then(()=>{console.log("connected to db")})
.catch(error=>{console.log(`error connect ${error}`)})

app.use('/',router)
app.listen(process.env.PORT,() => console.log(`listening port ${process.env.PORT}`))
