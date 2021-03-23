import React from 'react';
import classes from './StoryCard.module.scss';
import Button from '../Buttons/Button';

const StoryCard = ({ data }) => {
	console.log('data: ', data);
	return (
		<div className={classes.storycard}>
			<picture>
				<source media='(min-width: 768px)' srcSet={data.images.tablet} />
				<img
					className={classes.storycard__image}
					src={data.images.mobile}
					alt={data.title}
				/>
			</picture>
			<div className={classes.storycard__image__overlay}>
				<div className={classes.storycard__description}>
					<h3>{data.title}</h3>
					<p>by {data.author}</p>
					<Button className={classes.storycard__cta} variant='arrow'>
						read story
					</Button>
				</div>
			</div>
		</div>
	);
};

export default StoryCard;
