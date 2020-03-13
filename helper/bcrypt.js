"use strict"

const bcrypt = require('bcryptjs')

function hashPassword(password){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

function comparePassword(passFromUser, passFromDB){
    return bcrypt.compareSync(passFromUser, passFromDB)
}

module.exports = {hashPassword, comparePassword}