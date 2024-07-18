const jwt = require('jsonwebtoken');
const secret ="my_secret"

function createToken(username){
    return jwt.sign({username},secret,{expiresIn : '1m'});
}
function validateToken(token){
    try{
        const validate = jwt.verify(token,secret)
        return validate
    }
    catch(error){
        return null;
    }
}
module.exports ={
    createToken,
    validateToken
}