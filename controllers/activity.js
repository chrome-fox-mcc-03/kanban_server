const { Activity } = require('../models/index');

class ActivityController {
    static addActivity(req, res, next) {
        Activity.create({
            title: req.body.title,
            UserId: req.currentUserId
        })
            .then(newActivity => {
                res.status(200).json(newActivity)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = ActivityController;