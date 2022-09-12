import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
	return (
		<div>
			<BrowserRouter>
				{/* <NavBar /> */}
				<Router />
			</BrowserRouter>
		</div>
	);
}

export default App;
