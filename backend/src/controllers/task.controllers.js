const pool = require('../db/db');

const getAllTasks = async (req, res, next) => {
	try {
		const results = await pool.query('SELECT * FROM task');
		res.json(results.rows);
	} catch (error) {
		next(error);
	}
};
const getTaskById = async (req, res, next) => {
	const { id } = req.params;
	try {
		const results = await pool.query('SELECT * FROM task WHERE id = $1', [id]);
		//checking for existing id
		if (results.rows.length === 0) return res.status(404).json({ message: 'Task not found' });

		res.json(results.rows[0]);
	} catch (error) {
		next(error);
	}
};

const createTask = async (req, res, next) => {
	const { title, description } = req.body;

	try {
		const result = await pool.query(
			'INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *',
			[title, description]
		);
		console.log(result);
		res.json(result.rows[0]);
	} catch (error) {
		// res.json({ error: error.message });
		next(error);
	}
};

const updateTask = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { title, description } = req.body;
		console.log(id, title, description);
		const results = await pool.query(
			'UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *',
			[title, description, id]
		);
		if (results.rows.length === 0) return res.status(404).json({ message: 'Task not found' });

		return res.json(results.rows[0]);
	} catch (error) {
		next(error);
	}
};

const deleteTask = async (req, res, next) => {
	const { id } = req.params;

	try {
		await pool.query('DELETE FROM task WHERE id = $1', [id]);
		if (results.rows.length === 0) return res.status(404).json({ message: 'Task not found' });

		return res.sendStatus(204);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
};
