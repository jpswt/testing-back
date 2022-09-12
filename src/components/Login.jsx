import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import '../styles/Login.css';
import logoBW from '../images/logo-bw.png';
import loginImg from '../images/loginImg.jpg';
import axios from 'axios';

function Login() {
	const navigate = useNavigate();

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const [errorMsg, setErrorMsg] = useState('');

	const handleChange = (e) => {
		const logUser = { ...user };
		logUser[e.target.name] = e.target.value;
		setUser(logUser);
	};

	const loggedIn = (e) => {
		document.cookie = 'loggedIn=true;max-age=60*10000';
		navigate('/dashboard');
	};

	const handleLogin = (e) => {
		e.preventDefault();
		axios
			.post(`https://light-path.herokuapp.com/login`, {
				email: user.email,
				password: user.password,
			})
			.then((response) => {
				// localStorage.setItem('user_email', user.email);
				// document.cookie = 'loggedIn=true;max-age=60*10000','';
				// navigate('/dashboard');
				console.log('headers', response.headers);
				document.cookie = `jwt=${response.headers.authorization};max-age=60*10000`;
				loggedIn();
			})
			.catch((error) => {
				console.log(error);
				setErrorMsg(
					'Login failed.  Please try again or register for an account'
				);
			});

		setUser({
			email: '',
			password: '',
		});
	};

	return (
		<div className="login">
			<div className="content">
				<img
					className="image"
					src={loginImg}
					alt="man standing in field with sunset in background"
				/>
				<div className="col-2">
					<Paper
						elevation={4}
						sx={{
							padding: '2rem 0 2rem 0',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 4,
						}}
					>
						<img className="logo" src={logoBW} alt="lamp logo" />

						<Container
							sx={{
								marginTop: '2rem',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<form
								onSubmit={handleLogin}
								style={{
									width: '35ch',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}
							>
								<TextField
									required
									type="email"
									name="email"
									onChange={(e) => handleChange(e)}
									value={user.email}
									id="email"
									label="Email"
									variant="outlined"
									sx={{
										'& .MuiInputLabel-root.Mui-focused': { color: 'black' },
										'& .MuiOutlinedInput-root.Mui-focused': {
											'& > fieldset': { borderColor: 'orange' },
										},
										// 'marginLeft': 2,
										// 'marginRight': 2,
										'marginBottom': '1rem',
										'width': '30ch',
									}}
								/>
								<TextField
									required
									type="password"
									name="password"
									onChange={handleChange}
									value={user.password}
									id="password"
									label="Password"
									variant="outlined"
									sx={{
										'& .MuiInputLabel-root.Mui-focused': { color: 'black' },
										'& .MuiOutlinedInput-root.Mui-focused': {
											'& > fieldset': { borderColor: 'orange' },
										},
										'marginBottom': '1rem',
										'width': '30ch',
									}}
								/>
								<button
									className="button"
									type="submit"
									variant="contained"
									style={{ marginTop: '1rem' }}
								>
									LOGIN
								</button>
								{errorMsg ? <p className="">{errorMsg}</p> : null}
							</form>
							<span>
								Not a Member? <Link to="/Register">Sign up now</Link>
							</span>
						</Container>
					</Paper>
				</div>
			</div>
		</div>
	);
}

export default Login;
