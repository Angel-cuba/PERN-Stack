const getAllTasks = async (req, res) => {
	const results = await pool.query('SELECT NOW()');
	console.log(results);
	res.send(results.rows[0].now);
};
const getTaskById = async (req, res) => {
	res.send('GetById side');
};

const createTask = async (req, res) => {
	res.send('Create side');
};

const updateTask = async (req, res) => {
	res.send('Update side');
};

const deleteTask = async (req, res) => {
	res.send('Delete side');
};

module.exports = {
	getAllTasks,
	getTaskById,
	createTask,
	updateTask,
	deleteTask,
};
