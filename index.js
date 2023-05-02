// require('dotenv').config()
// const express = require('express')
// const router = require('./routes/routes')
// const DBConnection = require('./database/db')
// const cors = require('cors')

import express from 'express'
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors())

app.use('/', router)

app.get('/', (req, res)=>{
    res.send("<h1>Hello World</h1>")
})

DBConnection();
app.listen(PORT, ()=>{
    console.log(`Server is runnig on PORT ${PORT}`)
})
