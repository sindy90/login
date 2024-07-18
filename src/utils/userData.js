const users=[
    {
        username :'user1@mail.com',
        password :'pass',
        attempts:0,
        locked:false
    }
]

const maximumAttempt = 1;
let userTokens ={}
function checkUsername(username){
    return users.find(user=>user.username === username)
}

function checkPassword(user,password){
    return user.password === password
}

function incrementAttempt(user){
    user.attempts += 1
    return user.attempts
}

function resetAttempt(user){
    user.attempt = 0;
}

function lockUser (user){
    user.locked = true
}
function addToken(username,token){
    if(!userTokens[username]){
        userTokens[username] = []
    }
    userTokens[username].push(token)
}
function invalidateToken(username){
    delete userTokens[username];
}
function findTokens(username){
    return userTokens[username] || []
}
module.exports ={
    checkPassword,
    checkUsername,
    incrementAttempt,
    resetAttempt,
    lockUser,
    maximumAttempt,
    addToken,
    invalidateToken,
    findTokens
}