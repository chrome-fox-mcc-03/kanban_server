const router = require ('express').Router() ;
const TaskController = require ('../controllers/TaskController') ;
const authentication = require('../middlewares/authentication') ;
const authorization = require('../middlewares/authorization') ;

router.use(authentication);

router.get('/', TaskController.showTasks) ;
// router.get('/:id', TaskController.showTaskById) ;
// router.post('/', TaskController.createTask) ;
// router.put('/:id', authorization, TaskController.editTask) ;
// router.delete('/:id', authorization, TaskController.deleteTask) ;


module.exports = router