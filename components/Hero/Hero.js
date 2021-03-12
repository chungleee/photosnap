import React from 'react';
import classes from './Hero.module.scss';
import Container from '../Container/Container';
import Button from '../Buttons/Button';
import Accent from '../Accent/Accent';

const Hero = ({ children, image, button }) => {
	return (
		<div className={classes.hero}>
			<img src={image.src} alt={image.alt} />
			<Container className={classes.container}>
				<Accent className={classes.accent} />
				<div>
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
