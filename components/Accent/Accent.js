import React from 'react';
import classes from './Accent.module.scss';

const Accent = ({ className }) => {
	return <div className={`${classes.accent__rectangle} ${className}`}></div>;
};

export default Accent;
