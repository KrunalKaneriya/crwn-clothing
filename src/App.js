import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import './App.css';

function App() {
	return (
		<div>
				<Switch>
					<Route exact path="/" component={HomePage} />
				</Switch>
			</div>
	);
}

export default App;
