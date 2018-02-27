import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
	<Menu inverted fixed="top" stackable>
		<Menu.Item
			as={NavLink}
			to="/"
			name="Home"
			exact
			activeStyle={{
				background: '#5f78f6'
			}}
		/>
		{ props.links.map((d, i) => (
			<Menu.Item
				key={i}
				as={NavLink}
				to={`/${d.id}`}
				name={d.title}
				exact={d.exact}
				activeStyle={{
					background: '#5f78f6'
				}}
			/>
		))}
	</Menu>
);

export default NavBar;
