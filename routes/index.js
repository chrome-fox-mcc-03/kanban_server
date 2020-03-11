const router = require ('express').Router() ;
const UserRouter = require ('./UserRouter') ;
const TaskRouter = require ('./TaskRouter') ;

router.use ('/users', UserRouter) ;
router.use ('/tasks', TaskRouter) ;

module.exports = router