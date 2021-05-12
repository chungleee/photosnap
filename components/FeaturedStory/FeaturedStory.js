import React from 'react';
import classes from './FeaturedStory.module.scss';
import Container from '../Container/Container';
import Button from '../Buttons/Button';

const FeaturedStory = ({ children, data, ...props }) => {
	return (
		<div className={`${classes.featured__story} ${props.className}`}>
			<picture>
				<source media='(min-width: 1440px)' srcSet={data.images.desktop} />
				<source media='(min-width: 768px)' srcSet={data.images.tablet} />
				<img src={data.images.mobile} alt={data.title} />
			</picture>
			<Container className={classes.container}>
				<h2>last month's featured story</h2>
				{children.map((child) => {
					return (
						<child.type key={child.props.children}>
							{child.props.children}
						</child.type>
					);
				})}
				<Button variant='black-arrow'>read the story</Button>
			</Container>
		</div>
	);
};

export default FeaturedStory;
