import React from 'react';
import Hero from '../components/Hero/Hero';
import PricingCard from '../components/PricingCard/PricingCard';

const Pricing = () => {
	const heroImages = {
		mobile: '/assets/pricing/mobile/hero.jpg',
		tablet: '/assets/pricing/tablet/hero.jpg',
		desktop: '/assets/pricing/desktop/hero.jpg',
	};
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
		</div>
	);
};

export default Pricing;
