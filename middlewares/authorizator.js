const { Item } = require('../models/index');
const appError = require('../helper/appError');

module.exports = function (req, res, next) {
    if (Number(req.params.id)) {
        req.itemId = req.params.id;
        Item.findOne({
            where: {
                id: req.itemId
            }
        })
            .then(result => {
                if (result) {
                    if (result.UserId === req.appUser.id) {
                        next()
                    } else {
                        next(appError(401, 'user not authorized'))
                    }
                } else {
                    next(appError(404, 'item not found'))
                }
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    } else {
        next(appError(400, 'invalid item id'))
    }
}