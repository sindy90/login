const express = require ('express');
const router = express.Router();
const {checkUsername,checkPassword,incrementAttempt,resetAttempt,lockUser,maximumAttempt,addToken,invalidateToken} = require('../utils/userData')
const {createToken} = require('../utils/token')

router.post('/',(req,res)=>{
    const {username,password} = req.body;
    const user = checkUsername(username)
    if(!user){
        return res.status(401).json({error:"invalid user name passed"})
    }
    if(user.locked){
        return res.status(403).json({error :"Account locked due to invalid credentials"})
    }
    if(checkPassword(user,password)){
        resetAttempt(user)
        const token =createToken(username) 
        addToken(username,token)
        return res.status(200).json({message:'login successful',token})

    }
    else{
        const attempts = incrementAttempt(user)
        if(attempts >= maximumAttempt){
            lockUser(user);
            invalidateToken(username)
            return res.status(403).json({error : "account locked due to invalid credentials"})
        }
        return res.status(403).json({error:"invalid credentials passed"})
    }
})

module.exports = router