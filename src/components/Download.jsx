import React from 'react';
import { Header } from 'semantic-ui-react';

const Download = ( props ) => (
	<Header as="h4" color="blue">
		<a href={props.url}>{`Download ${props.name} data`}</a>
	</Header>
);

export default Download;
