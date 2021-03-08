import React, { useState } from 'react';
import classes from './Header.module.scss';
import Container from '../Container/Container';
import Button from '../Buttons/Button';
import Logo from '../Icons/Logo/Logo';
import MenuIcon from '../Icons/Menu/MenuIcon';
import CloseIcon from '../Icons/Menu/CloseIcon';

const Header = () => {
	const [clicked, setClicked] = useState(false);

	const handleToggleMenuIcon = () => {
		setClicked(!clicked);
	};

	return (
		<Container>
			<header className={classes.header}>
				<div>
					<Logo />
				</div>
				<div className={classes.menu}>
					<ul>
						<li>
							<a href='#'>stories</a>
						</li>
						<li>
							<a href='#'>features</a>
						</li>
						<li>
							<a href='#'>pricing</a>
						</li>
					</ul>
				</div>
				<Button className={classes.invite__button}>get an invite</Button>
				<div className={classes.menu__icons} onClick={handleToggleMenuIcon}>
					{clicked ? <CloseIcon /> : <MenuIcon />}
				</div>
			</header>
		</Container>
	);
};

export default Header;
