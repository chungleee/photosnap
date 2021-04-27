import React, { useState } from 'react';
import classes from './pricing.module.scss';
import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import Hero from '../components/Hero/Hero';
import PricingCard from '../components/PricingCard/PricingCard';
import SubToggle from '../components/Icons/Pricing/SubToggle';
import PricingFeatureTable from '../components/PricingFeatureTable/PricingFeatureTable';

const Pricing = () => {
	const [pricingPlan, setPricingPlan] = useState({ monthly: true });

	const heroImages = {
		mobile: '/assets/pricing/mobile/hero.jpg',
		tablet: '/assets/pricing/tablet/hero.jpg',
		desktop: '/assets/pricing/desktop/hero.jpg',
	};

	const pricingData = [
		{
			plan: 'basic',
			description:
				'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
			price: '19.00',
		},
		{
			plan: 'pro',
			description:
				'More advanced features available. Recommended for photography vetarans and professionals.',
			price: '39.00',
		},
		{
			plan: 'business',
			description:
				'Additional features available such as more detailed metrics. Recommended for business owners.',
			price: '99.00',
		},
	];

	return (
		<div>
			<Hero images={heroImages} alt='Photographer in sunset'>
				<h1>pricing</h1>
				<p>
					Create all your stories. Photosnap is a platform for photographers and
					visual storytellers. It's the simplest way to create and share your
					photos.
				</p>
			</Hero>

			<section className={classes.plan__type}>
				<div className={classes.plan__type__wrapper}>
					<h3 className={pricingPlan.monthly ? undefined : classes.light__grey}>
						Monthly
					</h3>
					<SubToggle
						onClick={() => {
							setPricingPlan({ monthly: !pricingPlan.monthly });
						}}
						pricingPlan={pricingPlan}
					/>
					<h3 className={pricingPlan.monthly ? classes.light__grey : undefined}>
						Yearly
					</h3>
				</div>
			</section>

			<Container>
				<Grid className={classes.pricing__grid}>
					{pricingData.map((data) => {
						return <PricingCard key={data.description} data={data} />;
					})}
				</Grid>
			</Container>
			<Container>
				<PricingFeatureTable />
			</Container>
		</div>
	);
};

export default Pricing;
