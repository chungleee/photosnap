import React from 'react';
import classes from './stories.module.scss';
import { stories } from '../data/storiesData';
import StoryCard from '../components/StoryCard/StoryCard';
import FeaturedStory from '../components/FeaturedStory/FeaturedStory';

const Stories = () => {
	return (
		<div>
			<FeaturedStory
				data={{
					images: {
						desktop: '/assets/stories/desktop/moon-of-appalacia.jpg',
						tablet: '/assets/stories/tablet/moon-of-appalacia.jpg',
						mobile: '/assets/stories/mobile/moon-of-appalacia.jpg',
					},
					title: 'Moon of Appalacia',
				}}
				className={classes.hero}
			>
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
			</FeaturedStory>

			<section className={classes.grid}>
				{stories.map((story) => {
					return (
						<StoryCard
							data={story}
							key={story.title}
							className={classes.storycard}
						/>
					);
				})}
			</section>
		</div>
	);
};

export default Stories;
