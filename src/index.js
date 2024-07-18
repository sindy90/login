const express = require('express')
const bodyParser = require('body-parser')
const rateLimit = require('express-rate-limit')
const cors = require('cors')

const app = express();
app.use(bodyParser.json())
app.use(cors())

const limiter = rateLimit ({
    windowMs: 3 * 60 * 1000, //3 minutes
    max :10,// for testing used this please increase or decrease based on requirement
    message :' request limit reached try agin after 3 minutes'
});

app.use(limiter)

const authRouter = require('./routes/login')
const onetimelinkRouter = require('./routes/oneTimeLink')
const timeRouter = require('./routes/time')
const kickRouter = require('./routes/kickout')



app.use('/login',authRouter)
app.use('/oneTimeLink',onetimelinkRouter)
app.use('/time',timeRouter)
app.use('/kickout',kickRouter)




const PORT = 3001

app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`)
})