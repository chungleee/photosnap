import React from 'react';
import classes from './Grid.module.scss';

const Grid = ({ children }) => {
	return <main className={classes.grid}>{children}</main>;
};

export default Grid;
