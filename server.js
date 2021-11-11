require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

//require routes - 따로 routes - index.js에 정리할 예정
const userRouter = require('./routes/user')
const boardRouter = require('./routes/board')
const commendRouter = require('./routes/commend')

const connectDB = require('./config/database')
connectDB()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(morgan('dev'))

app.use('/user', userRouter)
app.use('/board', boardRouter)
app.use('commend', commendRouter)

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connected server..."))