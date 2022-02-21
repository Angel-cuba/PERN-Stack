const router = require('express').Router();

const {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
} = require('../controllers/task.controllers');

router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);
router.post('/newTask', createTask);
router.put('/updateTask/:id', updateTask);
router.delete('/deleteTask/:id', deleteTask);

module.exports = router;
