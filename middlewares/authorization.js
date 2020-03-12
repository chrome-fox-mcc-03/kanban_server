const { Task } = require('../models');
const notFound = "Task Not Found!";
const unAuthorize = "You are unauthorize!";

function authorization(req, res, next) {
    let userId = req.userId;
    let taskId = req.params.id;

    Task.findOne({
        where: {
            id: taskId
        }
    })
        .then((result) => {
            if (result) {
                if (result.UserId == userId) {
                    next();
                } else {
                    throw new CustomError(401, unAuthorize)
                }
            } else {
                throw new CustomError(404, notFound)
            }
        }).catch((err) => {

        });
}

module.exports = authorization;
