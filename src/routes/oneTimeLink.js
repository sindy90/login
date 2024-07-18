const express = require ('express');
const router = express.Router();
const {checkUsername}= require('../utils/userData')
const {createToken} = require('../utils/token')

router.post('/',(req,res)=>{
    const {username} = req.body;
    const user = checkUsername(username)
    if(!user){
        return res.status(401).json({error:"invalid user name passed"})
    }
    const token = createToken(username)
const link = `http://localhost:3000/onetimelink/${token}`
res.json({link})
})

module.exports = router