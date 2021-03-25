import React from 'react';
import classes from './Grid.module.scss';

const Grid = ({ children, className }) => {
	return (
		<main className={`${classes.grid} ${className && className}`}>
			{children}
		</main>
	);
};

export default Grid;
