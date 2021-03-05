import React from 'react';
import classes from './Header.module.scss';
import Container from '../Container/Container';
import Logo from '../Icons/Logo/Logo';
import MenuIcon from '../Icons/Menu/MenuIcon';
import CloseIcon from '../Icons/Menu/CloseIcon';

const Header = () => {
	return (
		<Container>
			<header className={classes.header}>
				<div>
					<Logo />
				</div>
				<div>
					<MenuIcon />
				</div>
			</header>
		</Container>
	);
};

export default Header;
