import React from 'react';
import classes from './Hero.module.scss';
import Container from '../Container/Container';
import Button from '../Buttons/Button';
import Accent from '../Accent/Accent';

const Hero = ({ children, images, button }) => {
	return (
		<div className={classes.hero}>
			<picture>
				<source
					srcSet='/assets/home/tablet/create-and-share.jpg'
					media='(min-width: 768px)'
				/>
				<source
					srcSet='/assets/home/desktop/create-and-share.jpg'
					media='(min-width: 1440px)'
				/>

				<img
					src='/assets/home/mobile/create-and-share.jpg'
					alt='Person standing on boardwalk by the lake'
				/>
			</picture>
			<Container className={classes.container}>
				<Accent className={classes.accent__rectangle} />
				<div className={classes.inner__container}>
					{children.map((child) => {
						return (
							<child.type key={child.props.children}>
								{child.props.children}
							</child.type>
						);
					})}
					{button ? <Button variant='black-arrow'>{button}</Button> : null}
				</div>
			</Container>
		</div>
	);
};

export default Hero;
