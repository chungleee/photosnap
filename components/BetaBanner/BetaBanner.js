import React from 'react';
import classes from './BetaBanner.module.scss';
import Accent from '../Accent/Accent';
import Button from '../Buttons/Button';

const BetaBanner = () => {
	return (
		<div className={classes.beta}>
			<picture>
				<source
					media='(min-width: 1440px)'
					srcSet='/assets/shared/desktop/bg-beta.jpg'
				/>
				<source
					media='(min-width: 768px)'
					srcSet='/assets/shared/tablet/bg-beta.jpg'
				/>
				<img src='/assets/shared/mobile/bg-beta.jpg' alt='hero banner' />
			</picture>
			<div className={classes.beta__overlay}>
				<div className={classes.beta__content}>
					<Accent className={classes.content__accent} />
					<h1>we're in beta. get your invite today!</h1>
					<Button variant='black-arrow' className={classes.content__button}>
						get an invite
					</Button>
				</div>
			</div>
		</div>
	);
};

export default BetaBanner;
