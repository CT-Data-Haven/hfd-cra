import React from 'react';
import { Grid } from 'semantic-ui-react';
import { scaleOrdinal } from 'd3';
import * as _ from 'underscore';

import { componentFromProp } from 'recompose';

import MockChart from './MockChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
// import withChartFunctions from './withChartFunctions.js';

import '../styles/Dashboard.css';

const pal = require('../palette.json');
const schemes = {
	bold4: [ pal.blue[7], pal.red[6], pal.lime[7], pal.violet[7] ],
	indigo2: [ pal.indigo[8], pal.indigo[3] ],
	bright2: [ pal.blue[7], pal.red[5] ],
	bright3: [ pal.indigo[6], pal.pink[6], pal.cyan[7] ],
	twotone: [ pal.gray[8], pal.violet[4] ]
};

const ChartComponent = componentFromProp('component');
const chartHash = { bar: BarChart, line: LineChart };



const Dashboard = ({ charts, data }) => {
	console.log(data);

	return (
		<div className="Dashboard">
			<Grid stackable padded>
				{ charts && charts.map((chart) =>
					chart.component ?
						<ChartComponent
							key={chart.indicator}
							{...chart}
							component={chartHash[chart.component]}
							data={_.where(data, { indicator: chart.indicator })}
							color={scaleOrdinal().range(schemes[chart.scheme] || schemes.bold4)}
						 /> :
						<MockChart key={chart.indicator} {...chart} />
				)}
			</Grid>
		</div>
	);
}

export default Dashboard;
