import React from 'react';
import { Message } from 'semantic-ui-react';

const Goal = ({ goal }) => (
	<div className="Goal">
		<Message  size="large">
			<p><strong>Goal:</strong> { goal }</p>
		</Message>
	</div>
);

export default Goal;
