import React from 'react';
import * as _ from 'underscore';
import { Header, Icon } from 'semantic-ui-react';

import MockDashboard from './MockDashboard';
import Goal from './Goal';

const Topic = ({ match, meta }) => {
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

			<MockDashboard charts={info.charts} />
		</div>
	);
};

export default Topic;
