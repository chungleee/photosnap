import React from 'react';
import Button from '../Buttons/Button';
import Accent from '../Accent/Accent';
import classes from './PricingCard.module.scss';

const PricingCard = ({ data }) => {
	return (
		<div className={classes.pricing__card}>
			<Accent className={classes.accent} />
			<div className={classes.pricing__card__details}>
				<div>
					<div>
						<h2>{data.plan}</h2>
						<p>{data.description}</p>
					</div>
					<div>
						<h1>${data.price}</h1>
						<p>per month</p>
					</div>
				</div>
				<Button>pick plan</Button>
			</div>
		</div>
	);
};

export default PricingCard;
