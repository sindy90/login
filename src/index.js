const express = require('express')
const bodyParser = require('body-parser')
const rateLimit = require('express-rate-limit')
const cors = require('cors')

const app = express();
app.use(bodyParser.json())
app.use(cors())

const limiter = rateLimit ({
    windowMs: 3 * 60 * 1000,
    max :3,
    message :' request limit reached try agin after 3 minutes'
});

app.use(limiter)

const authRouter = require('./routes/login')
app.use('/login',authRouter)

const PORT = 3001

app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`)
})