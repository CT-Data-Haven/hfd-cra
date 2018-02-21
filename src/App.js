import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

// import Sector from './components/Sector';
// import MockSector from './components/MockSector';
import NavBar from './components/NavBar';
import Area from './components/Area';
import Home from './components/Home';

import './App.css';

// import childhood from './components/sectors/childhood/childhood.js';
import routes from './data/routes.js';
import charts from './data/charts.js';

// pass filtered meta down to Topic
const App = () => (
	<div className="App">
		<Router basename="/hfd-cra">
			<div>

				<NavBar links={routes} />

				<Divider hidden section />

				<Route path="/" component={Home} exact />
				<Route path="/:area" render={(props) => <Area routes={routes} charts={charts} {...props} />} />

			</div>
		</Router>
	</div>
);

export default App;
