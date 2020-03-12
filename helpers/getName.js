function getName(email) {
    return email.substr(0, email.indexOf('@'))
}

module.exports = getName