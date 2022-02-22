import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { Container } from '@mui/material';
import { NavBar } from './components/NavBar';

export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Container>
				<Routes>
					<Route path="/" element={<TaskList />} />
					<Route path="/task/new" element={<TaskForm />} />
					{/* Edit task route*/}
				</Routes>
			</Container>
		</BrowserRouter>
	);
}
