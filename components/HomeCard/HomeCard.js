import React from 'react';
import classes from './HomeCard.module.scss';
import Container from '../Container/Container';
import Button from '../Buttons/Button';

const HomeCard = ({ children }) => {
	return (
		<div className={classes.hero}>
			<picture>
				<source
					srcSet='/assets/home/desktop/create-and-share.jpg'
					media='(min-width: 1440px)'
				/>

				<source
					srcSet='/assets/home/tablet/create-and-share.jpg'
					media='(min-width: 768px)'
				/>

				<img
					src='/assets/home/mobile/create-and-share.jpg'
					alt='Person standing on boardwalk by the lake'
				/>
			</picture>
			<Container className={classes.container}>
				<div className={classes.inner__container}>
					{children.map((child) => {
						return (
							<child.type key={child.props.children}>
								{child.props.children}
							</child.type>
						);
					})}
					<Button fill='#000' variant='arrow'>
						view the stories
					</Button>
				</div>
			</Container>
		</div>
	);
};
export default HomeCard;
