import React from 'react';
import classes from './Container.module.scss';

const Container = ({ children, className }) => {
	return (
		<div className={`${classes.container} ${className ? className : ''}`}>
			{children}
		</div>
	);
};

export default Container;
