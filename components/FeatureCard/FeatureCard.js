import React from 'react';
import classes from './FeatureCard.module.scss';
import ResponsiveIcon from '../Icons/Features/ResponsiveIcon';
import BoostExposureIcon from '../Icons/Features/BoostExposureIcon';
import CustomDomainIcon from '../Icons/Features/CustomDomainIcon';
import DragDropIcon from '../Icons/Features/DragDropIcon';
import EmbedIcon from '../Icons/Features/EmbedIcon';
import NoLimitIcon from '../Icons/Features/NoLimitIcon';

// variants options = [boost-exposure, custom-domain, drag-drop, embed, no-limit, responsive]
const FeatureCard = ({ children, variant }) => {
	return (
		<div className={classes.feature__card}>
			<div className={classes.feature__card__icon}>
				{variant === 'boost-exposure' ? (
					<BoostExposureIcon />
				) : variant === 'custom-domain' ? (
					<CustomDomainIcon />
				) : variant === 'drag-drop' ? (
					<DragDropIcon />
				) : variant === 'embed' ? (
					<EmbedIcon />
				) : variant === 'no-limit' ? (
					<NoLimitIcon />
				) : variant === 'responsive' ? (
					<ResponsiveIcon />
				) : null}
			</div>
			<div>
				{children.map((child) => {
					return (
						<child.type key={child.props.children}>
							{child.props.children}
						</child.type>
					);
				})}
			</div>
		</div>
	);
};

export default FeatureCard;
