const express = require ('express');
const router = express.Router();
const {validateToken} = require('../utils/token')

router.post('/',(req,res)=>{
    const token = req.body.token;
    if(!token){
        return res.status(401).json({error:"please enter valid token"})
    }
    console.log(token)
    const user = validateToken(token)
    if(!user){
        return res.status(401).json({error:"Invalid token"})
    }
    return res.status(200).json({currentTime:new Date().toISOString()})
})

module.exports = router