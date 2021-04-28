import React, { useState } from 'react';
import classes from './pricing.module.scss';
import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import Hero from '../components/Hero/Hero';
import PricingCard from '../components/PricingCard/PricingCard';
import SubToggle from '../components/Icons/Pricing/SubToggle';
import PricingFeatureTable from '../components/PricingFeatureTable/PricingFeatureTable';
import { heroImages, pricingData, features } from '../data/pricingData';
import BetaBanner from '../components/BetaBanner/BetaBanner';

const Pricing = () => {
	const [pricingPlan, setPricingPlan] = useState({ monthly: true });

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

			<section className={classes.section}>
				<div className={classes.plan__type}>
					<div className={classes.plan__type__wrapper}>
						<h3
							className={pricingPlan.monthly ? undefined : classes.light__grey}
						>
							Monthly
						</h3>
						<SubToggle
							onClick={() => {
								setPricingPlan({ monthly: !pricingPlan.monthly });
							}}
							pricingPlan={pricingPlan}
						/>
						<h3
							className={pricingPlan.monthly ? classes.light__grey : undefined}
						>
							Yearly
						</h3>
					</div>
				</div>
				<Container>
					<Grid className={classes.pricing__grid}>
						{pricingData.map((data) => {
							return (
								<PricingCard
									key={data.description}
									monthly={pricingPlan.monthly}
									data={data}
								/>
							);
						})}
					</Grid>
				</Container>
			</section>

			<section className={classes.section}>
				<Container>
					<PricingFeatureTable features={features} />
				</Container>
			</section>

			<section className={classes.section}>
				<BetaBanner />
			</section>
		</div>
	);
};

export default Pricing;
