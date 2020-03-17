const router = require('express').Router();
const userRoutes = require('./user');
const categoryRoutes = require('./category');
const taskRoutes = require('./task');

router.use('/', userRoutes);
router.use('/category', categoryRoutes);
router.use('/task', taskRoutes);
module.exports = router;