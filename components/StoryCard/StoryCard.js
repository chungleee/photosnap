import React from 'react';
import classes from './StoryCard.module.scss';
import Button from '../Buttons/Button';

const StoryCard = ({ data, className }) => {
	return (
		<div className={`${classes.storycard} ${className}`}>
			<picture>
				<source media='(min-width: 768px)' srcSet={data.images.desktop} />
				<img
					className={classes.storycard__image}
					src={data.images.mobile}
					alt={data.title}
				/>
			</picture>
			<div className={classes.storycard__image__overlay}>
				<div className={classes.storycard__description}>
					{data.date && (
						<h3 className={classes.storycard__date}>{data.date}</h3>
					)}
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
