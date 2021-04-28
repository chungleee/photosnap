import React, { useEffect } from 'react';
import Link from 'next/link';
import Button from '../Buttons/Button';
import Container from '../Container/Container';
import classes from './MenuDropdown.module.scss';

const MenuDropdown = ({ toggled, handleToggleDropdown }) => {
	useEffect(() => {
		document.getElementById('dropdown').style.opacity = '1';
	}, [toggled]);

	return (
		<div id='dropdown' className={`${classes.dropdown}`}>
			<Container className={classes.dropdown__container}>
				<div className={classes.menu__dropdown}>
					<ul>
						<li onClick={handleToggleDropdown}>
							<Link href='/stories'>stories</Link>
						</li>
						<li onClick={handleToggleDropdown}>
							<Link href='/features'>features</Link>
						</li>
						<li onClick={handleToggleDropdown}>
							<Link href='/pricing'>pricing</Link>
						</li>
					</ul>

					<Button className={classes.invite__button}>get an invite</Button>
				</div>
			</Container>
		</div>
	);
};

export default MenuDropdown;
