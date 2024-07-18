const express = require ('express');
const router = express.Router();
const {checkUsername,checkPassword} = require('../utils/userData')

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
            return res.status(200).json({message:'login successful'})

    }
    else{
        return res.status(403).json({error:"invalid credentials passed"})
    }
})

module.exports = router