const routes = require('express').Router()
const UserController = require('../controllers/userController')
const TodoController = require('../controllers/todoController')
const labelController = require('../controllers/labelController')
const {authentication} = require('../middlewares/authentication')
const {authorization} = require('../middlewares/authorization')

routes.post('/register',UserController.register)
routes.post('/login',UserController.login)
routes.post('/loginGoogle',UserController.loginGoogle)

routes.get('/todos/:id',authentication,TodoController.getTodoByUserId)
routes.post('/todos',authentication,TodoController.addTodo)

routes.put('/todos/:id',authorization,TodoController.updateTodo)
routes.delete('/todos/:id',authorization,TodoController.deleteTodo)

routes.post('/label/:id',labelController.addLabel)
routes.delete('/label/:id',labelController.deleteLabel)

module.exports = routes