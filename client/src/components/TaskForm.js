import {
	Button,
	Card,
	CardContent,
	CircularProgress,
	Grid,
	TextField,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { editTask, postTask, readById } from '../api/request';
import { useNavigate, useParams } from 'react-router-dom';

export const TaskForm = () => {
	const navigate = useNavigate();
	const params = useParams();
	const [task, setTask] = useState({
		title: '',
		description: '',
	});
	const [loading, setLoading] = useState(false);
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		if (params.id) {
			loadTaskById(params.id);
		}
	}, [params.id]);

	const loadTaskById = async (id) => {
		await readById(id)
			.then((response) => response.json())
			.then((data) => setTask({ title: data.title, description: data.description }));
		setEditing(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		//loading spinner
		setLoading(true);
		if (editing) {
			await editTask(params.id, task)
				.then((response) => response.json())
				.then((data) => console.log(data));
		} else {
			//sending all task to the server
			await postTask(task);
		}

		//stopping spinner
		setLoading(false);
		// redirect
		navigate('/');
	};

	const handleChange = (e) => {
		setTask({ ...task, [e.target.name]: e.target.value });
	};

	return (
		<Grid container alignItems="center" justifyContent="center" direction="column">
			<Grid item xs={3}>
				<Card sx={{ mt: 5 }} style={{ backgroundColor: '#1e272e', padding: '1rem' }}>
					<Typography variant="5" textAlign="center" color="white">
						{editing ? 'Edit task' : 'Create task'}
					</Typography>
					<CardContent>
						<form onSubmit={handleSubmit}>
							<TextField
								variant="filled"
								label="Task Name"
								name="title"
								value={task.title}
								sx={{ display: 'block', margin: '.6rem 0' }}
								onChange={handleChange}
								inputProps={{ style: { color: 'white' } }}
								InputLabelProps={{ style: { color: 'whitesmoke', fontWeight: 'bold' } }}
							/>
							<TextField
								variant="filled"
								label="Task Description"
								name="description"
								value={task.description}
								onChange={handleChange}
								multiline
								rows={4}
								sx={{ display: 'block', margin: '.6rem 0' }}
								inputProps={{ style: { color: 'white' } }}
								InputLabelProps={{ style: { color: 'whitesmoke', fontWeight: 'bold' } }}
							/>
							<Button
								variant="contained"
								color="primary"
								type="submit"
								disabled={!task.title || !task.description}
							>
								{loading ? <CircularProgress color="inherit" size={24} /> : 'Save'}
							</Button>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
