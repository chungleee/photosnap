import React from 'react';
import classes from './Hero.module.scss';
import Container from '../Container/Container';
import Button from '../Buttons/Button';
import Accent from '../Accent/Accent';

const Hero = ({ children, button, images, alt, className }) => {
	return (
		<div className={`${classes.hero} ${className}`}>
			<picture>
				<source srcSet={images.desktop} media='(min-width: 1440px)' />

				<source srcSet={images.tablet} media='(min-width: 768px)' />

				<img src={images.mobile} alt={alt} />
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
					{button ? (
						<Button variant='black-arrow' className={classes.hero__cta}>
							{button}
						</Button>
					) : null}
				</div>
			</Container>
		</div>
	);
};

export default Hero;
