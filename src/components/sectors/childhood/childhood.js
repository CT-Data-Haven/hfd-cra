import * as d3 from 'd3';
import * as _ from 'underscore';

import LineChart from '../../LineChart';
import BarChart from '../../BarChart';

const lipsum = require('lorem-ipsum');

const pal = require('../../../palette.json');
const bold4 = [pal.blue[7], pal.red[6], pal.lime[7], pal.violet[7]];
const indigo2 = [pal.indigo[8], pal.indigo[3]];
const bright2 = [pal.blue[7], pal.red[5]];
const bright3 = [pal.indigo[6], pal.pink[6], pal.cyan[7]];

const trendData = d3.nest().key((d) => d.name).entries(require('./data/prek_enrollment_trend_2000_2016.json'));
const typeData = require('./data/prek_enrollment_by_type_2016.json');
const povData = require('./data/poverty rate by age.json');
const incomeData = require('./data/avg_family_income.json');

const colorLocation = d3.scaleOrdinal().domain(_.pluck(trendData, 'key')).range(bold4);
const colorType = d3.scaleOrdinal().domain(_.pluck(typeData, 'group')).range(indigo2);
const colorAge = d3.scaleOrdinal().domain(_.pluck(povData, 'group')).range(bright2);
const colorFam = d3.scaleOrdinal().domain(_.pluck(incomeData, 'group')).range(bright3);

const vision = `Vision or intro text: ${lipsum({ count: 3 })}`;
const goals = [
	{ goal: 'Increase preschool enrollment', text: lipsum({ count: 10, units: 'words' }) },
	{ goal: 'Decrease chronic absenteeism in kindergarten', text: lipsum({ count: 15, units: 'words' }) },
	{ goal: 'Improve staff credentialing', text: lipsum({ count: 12, units: 'words' }) }
];

const childhood = {
	id: 'childhood',
	icon: 'child',
	title: 'Early childhood',
	vision: vision,
	goals: goals,
	charts: [
		{
			title: 'Preschool enrollment by location, 2000-2016',
			component: LineChart,
			width: 8,
			source: 'US Census Bureau American Community Survey',
			data: trendData,
			color: colorLocation,
			group: 'name',
			axes: [
				{ orient: 'left' },
				{ orient: 'bottom', ticks: 4 }
			],
			yExtent: [ 0, 0.75 ],
			margin: { top: 10, right: 16, bottom: 30, left: 40 },
			hasLegend: true
		},
		{
			title: 'Preschool enrollment by school type, 2016',
			component: BarChart,
			width: 8,
			source: 'US Census Bureau American Community Survey',
			data: typeData,
			color: colorType,
			margin: { top: 10, right: 16, bottom: 30, left: 40 },
			hasLegend: true,
			rExtent: [ 0, 0.75 ]
		},
		{
			title: 'Child poverty rate by age, 2016',
			component: BarChart,
			width: 8,
			source: 'US Census Bureau American Community Survey',
			data: povData,
			color: colorAge,
			size: [ 800, 300 ],
			type: 'clusterbar',
			margin: { top: 10, right: 16, bottom: 30, left: 40 },
			hasLegend: true,
			oPadding: 16
		},
		{
			title: 'Average family income by family type, 2016',
			component: BarChart,
			width: 8,
			source: 'US Census Bureau American Community Survey',
			data: incomeData,
			color: colorFam,
			size: [ 800, 300 ],
			type: 'clusterbar',
			margin: { top: 10, right: 16, bottom: 30, left: 40 },
			hasLegend: true,
			format: '$.2s'
		}
	]
};

export default childhood;
