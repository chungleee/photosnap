import React, { useEffect } from 'react';
import Link from 'next/link';
import Button from '../Buttons/Button';
import classes from './MenuDropdown.module.scss';

const MenuDropdown = ({ toggled, handleToggleDropdown }) => {
	useEffect(() => {
		document.getElementById('dropdown').style.opacity = '1';
	}, [toggled]);

	return (
		<div id='dropdown' className={`${classes.dropdown}`}>
			<div className={classes.menu__dropdown}>
				<ul>
					<li onClick={handleToggleDropdown}>
						<Link href='#'>stories</Link>
					</li>
					<li onClick={handleToggleDropdown}>
						<Link href='#'>features</Link>
					</li>
					<li onClick={handleToggleDropdown}>
						<Link href='/pricing'>pricing</Link>
					</li>
				</ul>

				<Button className={classes.invite__button}>get an invite</Button>
			</div>
		</div>
	);
};

export default MenuDropdown;
