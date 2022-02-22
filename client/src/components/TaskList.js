import { Button, Card, CardContent, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { readAllTasks } from '../api/request';

export const TaskList = () => {
	const [tasks, setTasks] = useState();
	useEffect(() => {
		readAllTasks()
			.then((response) => response.json())
			.then((responseData) => setTasks(responseData));
	}, []);
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
									onClick={() => console.log('Edit')}
								>
									Edit
								</Button>
								<Button variant="contained" color="error" onClick={() => console.log('Delete')}>
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
