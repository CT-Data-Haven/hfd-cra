import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import * as _ from 'underscore';
import { Grid, Menu, Divider } from 'semantic-ui-react';

import Topic from './Topic';
import Download from './Download';

const Area = ({ match, routes, charts }) => {
	let area = match.params.area;
	let route = _.find(routes, (d) => d.id === area);
	let firstSub = route.subs[0];

	return (
		<div className="Area">
			<Grid container stackable>
				<Grid.Column width={4}>
					<Menu vertical fluid color="blue" attached="top">
						<Menu.Item header>Focus areas</Menu.Item>
						{ route.subs.map((d, i) => (
								<Menu.Item key={d.id} as={NavLink} to={`${match.url}/${d.id}`}>
									{ d.title }
								</Menu.Item>
							))
						}
					</Menu>
				</Grid.Column>

				<Grid.Column width={12}>
					<Switch>
						<Route path={`${match.url}/:topic`} render={ (props) => <Topic meta={charts[area]} {...props} /> } />
						<Redirect from={match.url} exact to={`${match.url}/${firstSub.id}`} />
					</Switch>
				</Grid.Column>

				<Divider hidden />

				<Grid.Column width={16}>
					<Download url={`${area}-fake-data.csv`} name={`${area} measures`} />
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default Area;
