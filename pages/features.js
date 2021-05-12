import React from 'react';
import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import Hero from '../components/Hero/Hero';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import classes from './features.module.scss';
import BetaBanner from '../components/BetaBanner/BetaBanner';

const Features = () => {
	const features = [
		{
			variant: 'responsive',
			headline: '100% Responsive',
			description:
				"No matter which device you're on, our site is fully responsive and stories look beautiful on any screen.",
		},
		{
			variant: 'no-limit',
			headline: 'No Photo Upload Limit',
			description:
				'Our tool has no limits on uploaads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
		},
		{
			variant: 'embed',
			headline: 'Available to Embed',
			description:
				'Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps, and more.',
		},
		{
			variant: 'custom-domain',
			headline: 'Custom Domain',
			description:
				'With Photosnap subscriptions, you can host your stories on your own domain. You can also remove our branding!',
		},
		{
			variant: 'boost-exposure',
			headline: 'Boost Your Exposure',
			description:
				'Users that viewed your story or gallery can easily get notified of new and featured stories with our built-in mailing list.',
		},
		{
			variant: 'drag-drop',
			headline: 'Drag & Drop Image',
			description:
				'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
		},
	];

	return (
		<div>
			<Hero
				images={{
					desktop: '/assets/features/desktop/hero.jpg',
					tablet: '/assets/features/tablet/hero.jpg',
					mobile: '/assets/features/mobile/hero.jpg',
				}}
			>
				<h1>features</h1>
				<p>
					We make sure all of our features are designed to be loved by every
					aspiring and even professional photographers who wanted to share their
					stories.
				</p>
			</Hero>

			<Container className={classes.featured__cards__container}>
				<Grid className={classes.feature__cards__grid}>
					{features.map((feature) => {
						return (
							<FeatureCard
								key={feature.headline}
								className={classes.feature__card}
								variant={feature.variant}
							>
								<h3>{feature.headline}</h3>
								<p>{feature.description}</p>
							</FeatureCard>
						);
					})}
				</Grid>
			</Container>

			<BetaBanner />
		</div>
	);
};
export default Features;
