import React from 'react';
import Grid from '../components/Grid/Grid';
import Hero from '../components/Hero/Hero';
import HomeCard from '../components/HomeCard/HomeCard';
import StoryCard from '../components/StoryCard/StoryCard';

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

			<Grid>
				{featuredStories.map((storyData) => {
					return <StoryCard data={storyData} key={storyData.title} />;
				})}
			</Grid>
		</div>
	);
};

export default Home;
