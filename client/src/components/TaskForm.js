import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

export const TaskForm = () => {
	const [task, setTask] = useState({
		title: '',
		description: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(task);
	};
	const handleChange = (e) => {
		setTask({ ...task, [e.target.name]: e.target.value });
		console.log(e.target.name, e.target.value);
	};

	return (
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<Grid item xs={3}>
				<Card sx={{ mt: 5 }} style={{ backgroundColor: '#1e272e', padding: '1rem' }}>
					<Typography variant="5" textAlign="center" color="white">
						Create task
					</Typography>
					<CardContent>
						<form onSubmit={handleSubmit}>
							<TextField
								variant="filled"
								label="Task Name"
								name="title"
								sx={{ display: 'block', margin: '.6rem 0' }}
								onChange={handleChange}
								inputProps={{ style: { color: 'white' } }}
								InputLabelProps={{ style: { color: 'whitesmoke', fontWeight: 'bold' } }}
							/>
							<TextField
								variant="filled"
								label="Task Description"
								name="description"
								onChange={handleChange}
								multiline
								rows={4}
								sx={{ display: 'block', margin: '.6rem 0' }}
								inputProps={{ style: { color: 'white' } }}
								InputLabelProps={{ style: { color: 'whitesmoke', fontWeight: 'bold' } }}
							/>
							<Button variant="contained" color="primary" type="submit">
								Save
							</Button>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
