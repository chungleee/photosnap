import React from 'react';
import classes from './SubToggle.module.scss';

const SubToggle = ({ pricingPlan, ...props }) => {
	return (
		<div onClick={props.onClick} className={classes.outer}>
			<div
				className={`${classes.inner} ${
					!pricingPlan.monthly ? classes.slideRight : classes.slideLeft
				}`}
			></div>
		</div>
	);
};

export default SubToggle;
