import React, { useEffect } from 'react';
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
						<a href='#'>stories</a>
					</li>
					<li onClick={handleToggleDropdown}>
						<a href='#'>features</a>
					</li>
					<li onClick={handleToggleDropdown}>
						<a href='#'>pricing</a>
					</li>
				</ul>

				<Button className={classes.invite__button}>get an invite</Button>
			</div>
		</div>
	);
};

export default MenuDropdown;
