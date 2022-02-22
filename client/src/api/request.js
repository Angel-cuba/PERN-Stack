export const readAllTasks = () => fetch('http://localhost:4000/tasks');
export const postTask = async (task) =>
	await fetch('http://localhost:4000/newTask', {
		method: 'POST',
		body: JSON.stringify(task),
		headers: { 'Content-Type': 'application/json' },
	})
		.then((response) => response.json())
		.then((data) => console.log('data', data));

export const deleteTask = async (id) =>
	fetch(`http://localhost:4000/deleteTask/${id}`, {
		method: 'DELETE',
	});
