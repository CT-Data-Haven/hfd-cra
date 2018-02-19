import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

import '../styles/ChartStage.css';

const ChartStage = (props) => (
		<Grid.Column width={props.width}>
			<Header as="h3" attached="top">{ props.title }</Header>
			<Segment attached="bottom">

				{ props.children }

				<p className="source">Source: { props.source }</p>
			</Segment>
		</Grid.Column>
);

export default ChartStage;
