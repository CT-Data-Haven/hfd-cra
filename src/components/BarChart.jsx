import React from 'react';
import { ResponsiveOrdinalFrame } from 'semiotic';
import { LegendOrdinal } from '@vx/legend';
import { max, format } from 'd3';

import ChartStage from './ChartStage';

const BarChart = (props) => {
	return (
		<ChartStage {...props}>
			<ResponsiveOrdinalFrame
				size={props.size || [ 400, 300 ]}
				responsiveWidth={true}
				data={props.data}
				oAccessor={props.oAccessor || 'name'}
				rAccessor={props.rAccessor || 'value'}
				type={props.type || 'bar'}
				style={ (d) => ({
					fill: props.color(d.group)
				}) }
				oLabel={true}
				oPadding={props.oPadding || 10}
				margin={props.margin}
				axis={{
					orient: 'left',
					tickFormat: props.format ? format(props.format) : format('.0%')
				}}
				rExtent={ props.rExtent || [ 0, max(props.data, d => d.value) ]}
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

export default BarChart;
