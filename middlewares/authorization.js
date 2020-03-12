const { Task } = require("../models");

module.exports = {
  authorization(req, res, next) {
    // find out whether that task exist
    Task.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        // task found
        if (result) {
          // compare id
          if (result.UserId === req.decoded.id) {
            // match, gave permission
            next();
          } else {
            next({
              status: 401,
              msg: "Unauthorized, you cannot temper with other people's data"
            });
          }
        } else {
          // task not found
          next({
            status: 404,
            msg: "Error not found"
          });
        }
      })
      .catch(next);
  }
};
