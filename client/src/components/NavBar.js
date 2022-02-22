import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export const NavBar = () => {
	const navigate = useNavigate();
	return (
		<Box>
			<AppBar position="static" color="transparent">
				<Container>
					<Toolbar>
						<Typography sx={{ flexGrow: 1 }} variant="h5">
							<Link style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to="/">
								PERN Stack
							</Link>
						</Typography>
						<Button variant="contained" color="success" onClick={() => navigate('/task/new')}>
							New task
						</Button>
					</Toolbar>
				</Container>
			</AppBar>
			{/*  */}
		</Box>
	);
};
