import React from 'react';
import Container from '../components/Container/Container';
import Grid from '../components/Grid/Grid';
import Hero from '../components/Hero/Hero';
import HomeCard from '../components/HomeCard/HomeCard';
import StoryCard from '../components/StoryCard/StoryCard';
import classes from './index.module.scss';

import BoostExposureIcon from '../components/Icons/Features/BoostExposureIcon';
import CustomDomainIcon from '../components/Icons/Features/CustomDomainIcon';
import DragDropIcon from '../components/Icons/Features/DragDropIcon';
import EmbedIcon from '../components/Icons/Features/EmbedIcon';
import NoLimitIcon from '../components/Icons/Features/NoLimitIcon';
import ResponsiveIcon from '../components/Icons/Features/ResponsiveIcon';
import FeatureCard from '../components/FeatureCard/FeatureCard';

const Home = () => {
	const featuredStories = [
		{
			images: {
				mobile: '/assets/stories/mobile/mountains.jpg',
				tablet: '/assets/stories/desktop/mountains.jpg',
			},
			title: 'The Mountains',
			author: 'John Appleseed',
		},
		{
			images: {
				mobile: '/assets/stories/mobile/cityscapes.jpg',
				tablet: '/assets/stories/desktop/cityscapes.jpg',
			},
			title: 'Sunset Cityscapes',
			author: 'Benjamin Cruz',
		},
		{
			images: {
				mobile: '/assets/stories/mobile/18-days-voyage.jpg',
				tablet: '/assets/stories/desktop/18-days-voyage.jpg',
			},
			title: '18 Days Voyage',
			author: 'Alexei Borodin',
		},
		{
			images: {
				mobile: '/assets/stories/mobile/architecturals.jpg',
				tablet: '/assets/stories/desktop/architecturals.jpg',
			},
			title: 'Architecturals',
			author: 'Samantha Brooke ',
		},
	];

	const homecardAssets = {
		beautifulStories: {
			mobile: '/assets/home/mobile/beautiful-stories.jpg',
			tablet: '/assets/home/tablet/beautiful-stories.jpg',
			desktop: '/assets/home/desktop/beautiful-stories.jpg',
			alt: 'Laptop on workstation',
		},
		designedForEveryone: {
			mobile: '/assets/home/mobile/designed-for-everyone.jpg',
			tablet: '/assets/home/tablet/designed-for-everyone.jpg',
			desktop: '/assets/home/desktop/designed-for-everyone.jpg',
			alt: 'Photographer with equipment',
		},
	};

	return (
		<div>
			<Hero alt='Person on lake boardwalk' button='get an invite'>
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
					return <StoryCard data={storyData} key={storyData.title} />;
				})}
			</Grid>

			<Container>
				<Grid className={classes.feature__cards__grid}>
					<FeatureCard>
						<h3>100% Responsive</h3>
						<p>
							No matter which device you're on, our site is fully responsive and
							stories look beautiful on any screen.
						</p>
					</FeatureCard>
					<NoLimitIcon />
					<EmbedIcon />
				</Grid>
			</Container>
		</div>
	);
};

export default Home;
