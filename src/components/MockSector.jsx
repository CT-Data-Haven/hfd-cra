import React from 'react';
import { Grid, Divider, Header, Icon } from 'semantic-ui-react';

const MockSector = ( props ) => (
	<div className="Sector">
		{/* <NavBar current={props.id} /> */}

		<Divider section hidden />

		<Grid container stackable>
			<Grid.Column width={16}>
				<Header size="huge">
					<Icon name="spinner" color="blue" />
					<Header.Content>{props.title}</Header.Content>
				</Header>
			</Grid.Column>

		</Grid>
	</div>
);

export default MockSector;
