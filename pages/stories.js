import React from 'react';
import Hero from '../components/Hero/Hero';
import classes from './stories.module.scss';
import { stories } from '../data/storiesData';
import StoryCard from '../components/StoryCard/StoryCard';

const Stories = () => {
	return (
		<div>
			<Hero
				images={{
					desktop: '/assets/stories/desktop/moon-of-appalacia.jpg',
					tablet: '/assets/stories/tablet/moon-of-appalacia.jpg',
					mobile: '/assets/stories/mobile/moon-of-appalacia.jpg',
				}}
				className={classes.hero}
				button='read the story'
			>
				<h2>last month's featured story</h2>
				<h1>
					hazy full <br /> moon of <br />
					appalachia
				</h1>
				<h3>
					March 2nd 2020 <span>by John Appleseed</span>
				</h3>
				<p>
					The dissected plateau area, while not actually made up of geological
					mountains, is popularly called "mountains", especially in eastern
					Kentucky and West Virginia, and while the ridges are not high, the
					terrain is extremely rugged.
				</p>
			</Hero>

			<section>
				{stories.map((story) => {
					return <StoryCard data={story} key={story.title} />;
				})}
			</section>
		</div>
	);
};

export default Stories;
