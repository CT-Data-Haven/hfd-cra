import React from 'react';
import { ResponsiveXYFrame } from 'semiotic';
import { LegendOrdinal } from '@vx/legend';
import { max, format } from 'd3';

import ChartStage from './ChartStage';

const LineChart = (props) => {
	return (
		<ChartStage {...props}>
			<ResponsiveXYFrame
				size={props.size || [ 400, 300 ]}
				responsiveWidth={true}
				lines={props.data}
				xAccessor={props.xAccessor || 'year'}
				yAccessor={props.yAccessor || 'value'}
				lineDataAccessor="values"
				lineStyle={ (d) => ({
					stroke: props.color(d.key), strokeWidth: 2
				}) }
				margin={props.margin}
				axes={[
					{ orient: 'left', tickFormat: props.format ? format(props.format) : format('.0%') },
					{ orient: 'bottom', ticks: 4 }
				]}
				yExtent={props.yExtent || [ 0, 1.0 ]}
				showLinePoints={true}
				pointStyle={ (d) => (
					{fill: props.color(d[props.group]), stroke: props.color(d[props.group]), strokeWidth: 3}
				)}
			/>
			{ props.hasLegend ?
				<LegendOrdinal
					scale={props.color}
					itemDirection="row"
					direction="row"
				/> : null
			}
		</ChartStage>
	)
};

export default LineChart;
