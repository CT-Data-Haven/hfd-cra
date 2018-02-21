import React from 'react';
import { Grid } from 'semantic-ui-react';

import MockChart from './MockChart';

import '../styles/Dashboard.css';

const MockDashboard = ({ charts }) => (
	<div className="Dashboard">
		<Grid stackable padded>
			{ charts && charts.map((chart, i) => (
				<MockChart key={chart.indicator} {...chart} />
			))}
		</Grid>
	</div>
);

export default MockDashboard;
