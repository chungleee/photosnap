import React, { useState } from 'react';
import Link from 'next/link';
import classes from './Header.module.scss';
import Container from '../Container/Container';
import Button from '../Buttons/Button';
import Logo from '../Icons/Logo/Logo';
import MenuIcon from '../Icons/Menu/MenuIcon';
import CloseIcon from '../Icons/Menu/CloseIcon';
import MenuDropdown from '../MenuDropdown/MenuDropdown';

const Header = () => {
	const [clicked, setClicked] = useState(false);

	const handleToggleDropdown = () => {
		setClicked(!clicked);
	};

	return (
		<header className={classes.header}>
			<Container className={classes.header__container}>
				<div>
					<Link href='/' passHref>
						<Logo />
					</Link>
				</div>
				<div className={classes.menu}>
					<ul>
						<li>
							<Link href='/stories'>stories</Link>
						</li>
						<li>
							<Link href='/features'>features</Link>
						</li>
						<li>
							<Link href='/pricing'>pricing</Link>
						</li>
					</ul>
				</div>
				<span className={classes.invite__button}>
					<Button>get an invite</Button>
				</span>
				<div className={classes.menu__icons} onClick={handleToggleDropdown}>
					{clicked ? <CloseIcon /> : <MenuIcon />}
				</div>
				{clicked ? (
					<MenuDropdown
						toggled={clicked}
						handleToggleDropdown={handleToggleDropdown}
					/>
				) : null}
			</Container>
		</header>
	);
};

export default Header;
