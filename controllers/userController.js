class Controller {
    static register(req, res, next) {
        let data = req.body
        res.status(200).json(data)
        // res.send(' from register controller')
    }

    static login(req, res, next) {
        res.send(' from login controller')
    }
}

module.exports = Controller