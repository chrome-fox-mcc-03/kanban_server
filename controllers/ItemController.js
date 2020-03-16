const { Item, User } = require('../models/index');
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
        Item.findAll({
            where: {
                UserId: req.appUser.id,
            },
            include: [{
                model: User, 
                attributes: ['id', 'name', 'email', 'avaurl'],
            }]
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(next);
    }
    static updateItem(req, res, next) {
        let id = req.params.id;
        let body = {};

        Item.update({}, {
            where: {
                id
            }
        })
        .then(result => {

        })
        .catch(next);
    }
    static deleteMyItem (req, res, next) {
        let id = req.params.id;

        Item.delete({
            where: {
                id
            }
        })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(next);
    }
};

module.exports = ItemController;