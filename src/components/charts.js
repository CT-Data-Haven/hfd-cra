import * as d3 from 'd3';
import * as _ from 'underscore';

import LineChart from './LineChart';
import BarChart from './BarChart';

const pal = require('../palette.json');
const bold4 = [pal.blue[7], pal.red[6], pal.cyan[7], pal.lime[7]];
const indigo2 = [pal.indigo[8], pal.blue[3]];
const bright2 = [pal.red[5], pal.blue[5]];

const trendData = d3.nest().key((d) => d.name).entries(require('../data/prek_enrollment_trend_2000_2016.json'));
const typeData = require('../data/prek_enrollment_by_type_2016.json');
const povData = require('../data/poverty rate by age.json');

const colorLocation = d3.scaleOrdinal().domain(_.pluck(trendData, 'key')).range(bold4);
const colorType = d3.scaleOrdinal().domain(_.pluck(typeData, 'group')).range(indigo2);
const colorAge = d3.scaleOrdinal().domain(_.pluck(povData, 'group')).range(bright2);

const meta = {
	childhood: [
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
			title: 'Child poverty rate by location and age, 2016',
			component: BarChart,
			width: 16,
			source: 'US Census Bureau American Community Survey',
			data: povData,
			color: colorAge,
			size: [ 800, 300 ],
			type: 'clusterbar',
			margin: { top: 10, right: 16, bottom: 30, left: 40 },
			hasLegend: true,
			oPadding: 16
		}
	]
};

export default meta;
