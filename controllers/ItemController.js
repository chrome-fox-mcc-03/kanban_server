const { Item } = require('../models/index');
const { getPayload } = require('../helper/jwt');

class ItemController {
    static create(req, res, next) {
        let body = {
            description: req.body.description,
            due_date: req.body.date,
            status: req.body.status,
            priority: req.body.priority,
        }
        let user = req.appUser;

        body.UserId = user.id;

        Item.create(body)
        .then(result => {
            res.status(200).json({
                result
            })
        })
        .catch(next);
    }
    static findMyItems(req, res, next) {
        // res.status(200).json("get item oke")
        
        Item.findAll({
            where: {
                // UserId: req.appUser.id,
            }
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(next);
    }
};

module.exports = ItemController;