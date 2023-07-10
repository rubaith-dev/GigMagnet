const {compare} = require("bcrypt")

const comparePassword = async (reqPassword, userPassword) =>{
    let isPasswordCorrect = await compare(reqPassword, userPassword)
    return isPasswordCorrect
}

module.exports = comparePassword