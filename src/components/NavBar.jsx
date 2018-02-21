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
				background: '#2185D0'
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
					background: '#2185D0'
				}}
			/>
		))}
	</Menu>
);

export default NavBar;
