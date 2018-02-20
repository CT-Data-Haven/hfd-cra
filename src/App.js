import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sector from './components/Sector';
import MockSector from './components/MockSector';
import NavBar from './components/NavBar';

import './App.css';

import childhood from './components/sectors/childhood/childhood.js';

const links = [
	{ to: '/childhood', title: 'Early childhood' },
	{ to: '/economy', title: 'Economic development' }
];

const App = () => (
	<div className="App">
		<Router>
			<div>
				<NavBar links={links} />

				<Route exact path="/" component={Home} />
				<Route path="/childhood" component={Childhood} />
				<Route path="/economy" component={Economy} />
			</div>
		</Router>
	</div>
);



const Home = () => ( <MockSector title="Home - placeholder" /> );
const Childhood = () => ( <Sector {...childhood} /> );
const Economy = () => ( <MockSector title="Economic development - example placeholder" /> );


export default App;
