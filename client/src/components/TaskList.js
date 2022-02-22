import { Button, Card, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { readAllTasks, deleteTask } from '../api/request';
import { useNavigate } from 'react-router-dom';

export const TaskList = () => {
	const navigate = useNavigate();
	const [tasks, setTasks] = useState();

	useEffect(() => {
		readAllTasks()
			.then((response) => response.json())
			.then((responseData) => setTasks(responseData));
	}, []);

	const hadleDeleteTask = async (id) => {
		try {
			await deleteTask(id).then((response) => console.log(response));
			//delete a single element with a unique id
			setTasks(tasks.filter((task) => task.id !== id));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h1>Task list</h1>
			{!tasks ? (
				<h1>Loading tasks</h1>
			) : (
				tasks.map((task, index) => (
					<Card
						key={index}
						style={{ marginBottom: '20px', backgroundColor: '#1e272e', color: '#fff' }}
					>
						<CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
							<div>
								<Typography>{task.title}</Typography>
								<Typography>{task.description}</Typography>
							</div>
							<div>
								<Button
									style={{ marginRight: '1.5rem' }}
									variant="contained"
									color="primary"
									onClick={() => navigate(`/task/${task.id}/edit`)}
								>
									Edit
								</Button>
								<Button variant="contained" color="error" onClick={() => hadleDeleteTask(task.id)}>
									Delete
								</Button>
							</div>
						</CardContent>
					</Card>
				))
			)}
		</>
	);
};
