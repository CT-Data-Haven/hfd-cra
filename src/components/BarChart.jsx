import React from 'react';
import PropTypes from 'prop-types';
import * as _ from 'underscore';
import { ResponsiveOrdinalFrame } from 'semiotic';
import { LegendOrdinal } from '@vx/legend';
import { max, format } from 'd3';
import { defaultProps } from 'recompose';
import wrap from 'word-wrap';

import ChartStage from './ChartStage';

const tspans = (str, thresh) => (str.length <= thresh || str.indexOf(' ') === -1 ?
	str :
	str.split(' ').map((d, i) => <tspan key={i} x={0} dy={`${i}em`}>{d}</tspan>));

const withDefaults = defaultProps({
	size: [ 400, 240 ],
	oAccessor: 'name',
	rAccessor: 'value',
	type: 'bar',
	oPadding: 10,
	format: '.0%',
	margin: { top: 10, right: 16, bottom: 30, left: 40 },
	ticks: 4,
	projection: 'vertical',
	thresh: 15
});

const BarChart = (props) => {
	console.log(props);

	return (
		<ChartStage {...props}>
			<ResponsiveOrdinalFrame
				size={props.size}
				responsiveWidth={true}
				data={props.data}
				oAccessor={props.oAccessor}
				rAccessor={props.rAccessor}
				type={props.type}
				style={ (d) => ({
					fill: props.color(d.group)
				}) }
				oLabel={(d) => <text style={{ textAnchor: props.projection === 'vertical' ? 'middle' : 'end' }}>{tspans(d, props.thresh)}</text>}
				oPadding={props.oPadding}
				margin={props.margin}
				axis={{
					orient: 'left',
					tickFormat: props.format ? format(props.format) : format('.0%'),
					ticks: props.ticks
				}}
				rExtent={ props.rExtent || [ 0, max(props.data, d => d.value) ]}
				projection={props.projection}
			/>
			{ props.hasLegend ?
				<LegendOrdinal
					scale={props.color.domain(_.pluck(props.data, 'group'))}
					itemDirection="row"
					direction="row"
				/> : null
			}
		</ChartStage>
	)
};

export default withDefaults(BarChart);
