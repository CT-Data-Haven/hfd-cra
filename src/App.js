import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import * as _ from 'underscore';

// import Sector from './components/Sector';
// import MockSector from './components/MockSector';
import NavBar from './components/NavBar';
import Area from './components/Area';
import Home from './components/Home';

import './App.css';

// import childhood from './components/sectors/childhood/childhood.js';
import routes from './data/routes.js';
import charts from './data/charts.js';
import data from './data/all_data.json';

const nested = _.chain(data)
	.groupBy('area')
	.mapObject((df) => _.groupBy(df, 'topic'))
	.value();

// pass filtered meta down to Topic
const App = () => (
	<div className="App">
		<Router basename="/hfd-cra">
			<div>

				<NavBar links={routes} />

				<Divider hidden section />

				<Route path="/" component={Home} exact />
				<Route path="/:area" render={(props) => <Area routes={routes} charts={charts} data={nested} {...props} />} />

			</div>
		</Router>
	</div>
);

export default App;
