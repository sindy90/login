const users=[
    {
        username :'user1@mail.com',
        password :'pass',
        attempts:0,
        locked:false
    }
]

const maximumAttempt = process.env.ATTEMPT;

function checkUsername(username){
    return users.find(user=>user.username === username)
}

function checkPassword(user,password){
    return user.password === password
}

module.exports ={
    checkPassword,
    checkUsername
}