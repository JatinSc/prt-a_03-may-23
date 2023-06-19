const express = require('express');
const mongoose = require('mongoose');
const todoRouter = require('./routes/todo-routes')
require('dotenv').config()


const app = express();
app.use(express.json())
app.use(require('cors')())
app.use('/', todoRouter)

const PORT = 8000
const database = process.env.database


mongoose.connect(database ,{ useNewUrlParser: true, useUnifiedTopology: true } )
                .then(()=>{console.log("connected to database")})
                .catch((err)=>{console.log(err)})

app.listen(PORT , ()=>{
    console.log(`app listening on port ${PORT}`)
})
