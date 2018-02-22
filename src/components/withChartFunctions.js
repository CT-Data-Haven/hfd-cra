import React from 'react';
import * as d3 from 'd3';
import * as _ from 'underscore';

import ChartStage from './ChartStage';

const pal = require('../palette.json');
const schemes = {
	bold4: [ pal.blue[7], pal.red[6], pal.lime[7], pal.violet[7] ],
	indigo2: [ pal.indigo[8], pal.indigo[3] ],
	bright2: [ pal.blue[7], pal.red[5] ],
	bright3: [ pal.indigo[6], pal.pink[6], pal.cyan[7] ]
};

const withChartFunctions = (Component, props) => {
	return (
		// <ChartStage {...props}>
			<Component {...props} schemes={schemes}
			/>
		// </ChartStage>
	);
};

export default withChartFunctions;

// color={d3.scaleOrdinal().range(schemes[props.scheme])}
