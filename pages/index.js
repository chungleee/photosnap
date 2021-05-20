import React from 'react';
import classes from './index.module.scss';
import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import Hero from '../components/Hero/Hero';
import HomeCard from '../components/HomeCard/HomeCard';
import StoryCard from '../components/StoryCard/StoryCard';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import {
	heroImages,
	featuredFeatures,
	featuredStories,
	homecardAssets,
} from '../data/homeData';

const Home = () => {
	return (
		<div>
			<Hero
				images={heroImages}
				alt='Person on lake boardwalk'
				button='get an invite'
			>
				<h1>create and share your photo stories.</h1>
				<p>
					Photosnap is a platform for photographers and visial storytellers. We
					make it easy to share photos, tell stories and connect with others.
				</p>
			</Hero>

			<HomeCard images={homecardAssets.beautifulStories}>
				<h1>
					beautiful stories <br /> every time
				</h1>
				<p>
					We provide design templates to ensure your stories look terrific.
					Easily add photos, text, embed maps and media from other networks.
					Then share your story with everyone.
				</p>
			</HomeCard>

			<HomeCard flipped={true} images={homecardAssets.designedForEveryone}>
				<h1>designed for everyone</h1>
				<p>
					Photosnap can help you create stories that resonate with your
					audience. Our tool is designed for photographers of all levels,
					brands, businesses you name it.
				</p>
			</HomeCard>

			<Grid className={classes.featured__stories__grid}>
				{featuredStories.map((storyData) => {
					return (
						<StoryCard
							data={storyData}
							key={storyData.title}
							className={classes.featured__storycards}
						/>
					);
				})}
			</Grid>

			<Container className={classes.featured__cards__container}>
				<Grid className={classes.feature__cards__grid}>
					{featuredFeatures.map((feature) => {
						return (
							<FeatureCard key={feature.headline} variant={feature.variant}>
								<h3>{feature.headline}</h3>
								<p>{feature.description}</p>
							</FeatureCard>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
};

export default Home;
