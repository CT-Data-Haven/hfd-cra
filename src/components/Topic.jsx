import React from 'react';
import * as _ from 'underscore';
import { Header, Icon } from 'semantic-ui-react';

import Dashboard from './Dashboard';
import Goal from './Goal';

const Topic = ({ match, meta, data }) => {
	let topic = match.params.topic;
	let info = _.find(meta, (d) => d.id === topic);
	let icon = info.icon ? <Icon name={info.icon} color="blue" /> : <span />;

	return (
		<div>
			<Header size="huge">
				{ icon }
				<Header.Content>{info.full}</Header.Content>
			</Header>

			<Goal goal={info.goal} />

			<Dashboard charts={info.charts} data={data[topic]} />
		</div>
	);
};

export default Topic;
