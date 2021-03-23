import React from 'react';
import classes from './FeatureCard.module.scss';
import ResponsiveIcon from '../Icons/Features/ResponsiveIcon';

const FeatureCard = ({ children, variant }) => {
	return (
		<div className={classes.feature__card}>
			<ResponsiveIcon />
			{children.map((child) => {
				return (
					<child.type key={child.props.children}>
						{child.props.children}
					</child.type>
				);
			})}
		</div>
	);
};

export default FeatureCard;
