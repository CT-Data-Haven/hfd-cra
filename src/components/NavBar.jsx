import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
	<Menu inverted fixed="top" stackable>
		<Menu.Item as={Link} to="/" name="home" icon="chevron left" />
		<Menu.Menu>
			<Dropdown item text="Sectors">
				<Dropdown.Menu>
					{ props.links.map((d, i) => (
						<Dropdown.Item key={i} as={Link} to={d.to}>{ d.title }</Dropdown.Item>
					)) }
				</Dropdown.Menu>
			</Dropdown>
		</Menu.Menu>
	</Menu>
);

export default NavBar;
