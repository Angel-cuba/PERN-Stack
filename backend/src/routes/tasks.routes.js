const router = require('express').Router();
const pool = require('../db/db');
const {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
} = require('../controllers/task.controllers');

router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.post('/newTask', createTask);
router.put('/updateTask', updateTask);
router.delete('/deleteTask', deleteTask);

module.exports = router;
