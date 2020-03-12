const { Activity } = require('../models/index');

class ActivityController {
    static addActivity(req, res, next) {
        Activity.create({
            title: req.body.title,
            UserId: req.currentUserId
        })
            .then(newActivity => {
                res.status(201).json(newActivity)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static fetchActivities(req, res, next) {
        Activity.findAll({})
            .then(activities => {
                res.status(200).json(activities)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static delete(req, res, next) {
        let activityId = req.params.id;
        let deletedActivity;
        Activity.findByPk(activityId)
            .then(activity => {
                if (activity) {
                    deletedActivity = activity;
                    return Activity.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                } else {
                    res.status(404).json({ status: 404, message: "Sorry, we do not find the activity you're looking for"})
                }
            })
            .then(() => {
                res.status(200).json({ deletedActivity })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = ActivityController;