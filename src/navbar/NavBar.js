import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';
import Home from '../home/Home';
import UserPage from '../userpage/UserPage';
import {Switch, Route, Link} from 'react-router-dom';
import Search from './search/Search';

const NavBar = (props) => {
	const [isOpen , setIsOpen] = useState(false);

	const toggle = () => { 
		let newIsOpen = !isOpen;
		setIsOpen(newIsOpen);
	}

	return(
		<Navbar color='faded' light expand='md'>
			<NavbarBrand href='/'>ListenUp!</NavbarBrand>
			<NavbarToggler onClick={toggle}/>
			<Collapse isOpen={isOpen} navbar>
				<Nav className='ml-auto' navbar>
					<NavItem>
						<Search />
						<Button onClick={props.clearToken}>Logout</Button>
						<Link to='/home'>Home</Link>
						<Link to='/userpage'>My Playlist</Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	)
}

export default NavBar;