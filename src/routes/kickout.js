const express = require ('express');
const router = express.Router();
const {findTokens}=require('../utils/userData')

router.post('/',(req,res)=>{
    const {username} = req.body;
    const tokens = findTokens(username)
    if(!tokens || tokens.length === 0){
        return res.status(404).json({error:"user token not found"})
    }

    return res.status(200).json({message:"user has been kicked out"})
})

module.exports = router