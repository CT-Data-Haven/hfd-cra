import React from 'react';
import { Grid, Divider, Header, Icon, Segment } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';



const MockSector = ({ meta, match }) => {
	console.log(meta, match);
	
	return (
		<div className="Sector">

			<Divider section hidden />

			<Grid container stackable>
				<Grid.Column width={16}>
					<Header size="huge">
						<Icon name="spinner" color="blue" />
						<Header.Content>{meta.title}</Header.Content>
					</Header>
				</Grid.Column>
				<Grid.Column width={4}>
					<Segment>
						{
							meta.subs.map((sub, i) => (
								<Link key={i} to={`${match.url}/${sub.id}`}>{sub.title}</Link>
							))
						}
					</Segment>
				</Grid.Column>
				<Grid.Column width={12}>
					<Segment>
						<Route path={`${match.path}/:subId`} component={H1} />
					</Segment>
				</Grid.Column>
			</Grid>
		</div>
	);
};

const H1 = ({ match }) => ( <h2>{ match.params.subId }</h2> );

export default MockSector;
