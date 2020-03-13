const routes = require('express').Router()
const UserController = require('../controllers/userController')
const TodoController = require('../controllers/todoController')
const labelController = require('../controllers/labelController')

routes.post('/register',UserController.register)
routes.post('/login',UserController.login)

routes.get('/todos/:id',TodoController.getTodoByUserId)
routes.post('/todos',TodoController.addTodo)

routes.put('/todos/:id',TodoController.updateTodo)
routes.delete('/todos/:id',TodoController.deleteTodo)

// routes.get('/label/:id',labelController.getLabelByTodoId)
routes.post('/label/:id',labelController.addLabel)
routes.delete('/label/:id',labelController.deleteLabel)

module.exports = routes