const { jwtoken } = require('../helpers');
const { User, Category, Task } = require('../models');
module.exports = {
  authentication: async (req, res, next) => {
    try {
      const { access_token } = req.headers;
      
      if (access_token) {
        const decoded = jwtoken.verifyToken(access_token);

        const user = await User.findOne({
          where: {
            id: decoded.data.id,
          },
        });
        
        if (user) {
          req.decoded = decoded.data;
          next();
        } else {
          const error = {
            status: 401,
            name: 'Authentication failed',
            message: 'Please Register First',
          };
          next(error);
        }
      } else {
        const error = {
          status: 401,
          name: 'Authentication failed',
          message: 'Please Login First',
        };
        next(error);
      }
    } catch (err) {
      next(err);
    }
  },

  categoryAuthorization: async (req, res, next) => {
    try {
      const categoryId = req.params.id;
      const loggedInUserID = req.decoded.id;

      const category = await Category.findOne({
        where: {
          id: categoryId,
        }
      });

      if (category) {
        if (category.UserId === loggedInUserID) {
          next();
        } else {
          const error = {
            status: 401,
            name: 'Unauthorized',
            message: 'You are not authorized to do this action',
          };

          next(error);
        }
      } else {
        const error = {
          name: 'Not Found',
          status: 404,
          message: `Category with id ${categoryId} not found`,
        };
        next(error);
      }
    } catch (err) {
      next(err);
    }
  },

  taskAuthorization: async (req, res, next) => {
    try {
      const loggedInUserID = req.decoded.id;
      const taskID = req.params.id;

      const task = await Task.findOne({
        where: {
          UserId: loggedInUserID,
          id: taskID,
        },
      });

       if (task) {
        if (task.UserId === loggedInUserID) {
          next();
        } else {
          const err = {
            status: 401,
            name: 'Unauthorized',
            message: 'You are not authorized to do this action',
          };
          next(err);
        }
       } else {
         const err = {
           status: 404,
           name: 'Not found',
           message: `Task with id ${taskID} not found`,
         };
         next(err);
       }
    } catch (err) {

    }
  }
}