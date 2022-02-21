const pool = require('../db/db');

const getAllTasks = async (req, res) => {
	try {
		const results = await pool.query('SELECT * FROM task');
		res.json(results.rows);
	} catch (error) {
		console.log(error.message);
	}
};
const getTaskById = async (req, res) => {
	const { id } = req.params;
	try {
		const results = await pool.query('SELECT * FROM task WHERE id = $1', [id]);
		//checking for existing id
		if (results.rows.length === 0) return res.status(404).json({ message: 'Task not found' });

		res.json(results.rows[0]);
	} catch (error) {
		console.log(error.message);
	}
};

const createTask = async (req, res) => {
	const { title, description } = req.body;

	try {
		const result = await pool.query(
			'INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *',
			[title, description]
		);
		console.log(result);
		res.json(result.rows[0]);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const updateTask = async (req, res) => {
	const { id } = req.params;
	const { title, description } = req.body;
	console.log(id, title, description);
	const results = await pool.query(
		'UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *',
		[title, description, id]
	);
	if (results.rows.length === 0) return res.status(404).json({ message: 'Task not found' });

	return res.json(results.rows[0]);
};

const deleteTask = async (req, res) => {
	const { id } = req.params;

	await pool.query('DELETE FROM task WHERE id = $1', [id]);
	if (results.rows.length === 0) return res.status(404).json({ message: 'Task not found' });

	return res.sendStatus(204);
};

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
};
