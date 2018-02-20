import React from 'react';
import { Grid, Divider, Header, Icon } from 'semantic-ui-react';

import Vision from './Vision';
import GoalList from './GoalList';
import Dashboard from './Dashboard';
import Download from './Download';

// import '../styles/Sector.css';

const Sector = ( props ) => (
	<div className="Sector">
		{/* <NavBar current={props.id} /> */}

		<Divider section hidden />

		<Grid container stackable>
			<Grid.Column width={16}>
				<Header size="huge">
					<Icon name={props.icon} color="blue" />
					<Header.Content>{props.title}</Header.Content>
				</Header>
				<Vision vision={props.vision} />
			</Grid.Column>
			<Grid.Column width={4}>
				<GoalList goals={props.goals} />
			</Grid.Column>
			<Grid.Column width={12}>
				<Dashboard charts={props.charts} />
			</Grid.Column>
			<Download url={props.url} />
		</Grid>
	</div>
);

export default Sector;
