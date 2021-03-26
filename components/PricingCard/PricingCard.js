import React from 'react';
import Container from '../Container/Container';
import Button from '../Buttons/Button';
import Accent from '../Accent/Accent';
import classes from './PricingCard.module.scss';

const PricingCard = ({ data }) => {
	return (
		<div className={classes.pricing__card}>
			<Accent className={classes.accent} />
			<Container className={classes.pricing__card__details}>
				<div className={classes.pricing__card__details__wrapper}>
					<div className={classes.pricing__card__details__left}>
						<h2>{data.plan}</h2>
						<p>{data.description}</p>
					</div>
					<div className={classes.pricing__card__details__right}>
						<h1>${data.price}</h1>
						<p>per month</p>
					</div>
				</div>
				<Button>pick plan</Button>
			</Container>
		</div>
	);
};

export default PricingCard;
