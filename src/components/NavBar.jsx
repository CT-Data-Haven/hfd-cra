import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = (props) => (
	<Menu inverted fixed="top" stackable>
		{/* <Menu.Item as={NavLink} to="/" name="home" /> */}
		{/* <Menu.Menu>
			<Dropdown item text="Sectors">
				<Dropdown.Menu>
			{ props.links.map((d, i) => (
			<Dropdown.Item key={i} as={NavLink} to={d.to}>{ d.title }</Dropdown.Item>
			)) }
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Menu> */}
		{ props.links.map((d, i) => (
			<Menu.Item
				key={i}
				as={NavLink}
				to={d.to}
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
