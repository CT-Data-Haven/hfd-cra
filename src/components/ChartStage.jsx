import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

import '../styles/ChartStage.css';

const ChartStage = (props) => (
		<Grid.Column width={props.width}>
			<Header as="h4" attached="top">
				<Header.Content>{ props.title }</Header.Content>
				{ props.subtitle ? <Header.Subheader>{ props.subtitle }</Header.Subheader> : null }
			</Header>

			<Segment attached="bottom">

				{ props.children }

				<p className="source">Source: { props.source }</p>
			</Segment>
		</Grid.Column>
);

ChartStage.defaultProps = {
	width: 8
};

export default ChartStage;
