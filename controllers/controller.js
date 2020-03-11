const { User } = require('./../models')
const { comparePass } = require('./../helpers/bcrypt')
const { generateToken } = require('./../helpers/jwt')

class Controller {
    static login (req, res, next) {
        const { email,password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(result => {
                if (!result) {
                    const error = {
                        name: "Email or Password Invalid"
                    }
                    throw error
                } else {
                    const isTrue = comparePass(password, result.password)
                        if (!isTrue) {
                            const error = {
                                name: "Email or Password Invalid"
                            }
                            throw error
                        } else {
                            const payload = {
                                id: result.id,
                                first_name: result.first_name,
                                last_name: result.last_name,
                                email: result.email,
                                role: result.role
                            }
                            const token = generateToken(payload)
                            req.headers.token = token
                            res.status(200).json({ token })
                        }
                }
            })
            .catch(err => {
                res.status(400).json(err)
            })
    }
}

module.exports = Controller