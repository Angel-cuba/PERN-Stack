//READ TASKS
export const readAllTasks = () => fetch('http://localhost:4000/tasks');

//READ BY ID
export const readById = (id) => fetch(`http://localhost:4000/task/${id}`);
//POST TASKS
export const postTask = async (task) =>
	await fetch('http://localhost:4000/newTask', {
		method: 'POST',
		body: JSON.stringify(task),
		headers: { 'Content-Type': 'application/json' },
	})
		.then((response) => response.json())
		.then((data) => console.log('data', data));

//EDIT TASK
export const editTask = async (id, task) =>
	await fetch(`http://localhost:4000/updateTask/${id}`, {
		method: 'PUT',
		body: JSON.stringify(task),
		headers: { 'Content-Type': 'application/json' },
	});

//DELETE TASK
export const deleteTask = async (id) =>
	fetch(`http://localhost:4000/deleteTask/${id}`, {
		method: 'DELETE',
	});
