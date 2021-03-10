import React from 'react';
import classes from './Footer.module.scss';
import Container from '../Container/Container';
import Logo from '../Icons/Logo/Logo';
import Facebook from '../Icons/Socials/facebook';
import Instagram from '../Icons/Socials/instagram';
import Pinterest from '../Icons/Socials/pinterest';
import Twitter from '../Icons/Socials/twitter';
import Youtube from '../Icons/Socials/youtube';
import Button from '../Buttons/Button';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Container className={classes.footer__container}>
				<div>
					<Logo fill='#fff' />
				</div>
				<ul className={classes.footer__socials}>
					<li>
						<Facebook fill='#fff' />
					</li>
					<li>
						<Youtube fill='#fff' />
					</li>
					<li>
						<Twitter fill='#fff' />
					</li>
					<li>
						<Pinterest fill='#fff' />
					</li>
					<li>
						<Instagram fill='#fff' />
					</li>
				</ul>
				<ul className={classes.footer__links}>
					<li>
						<a href='#'>home</a>
					</li>
					<li>
						<a href='#'>stories</a>
					</li>
					<li>
						<a href='#'>features</a>
					</li>
					<li>
						<a href='#'>pricing</a>
					</li>
				</ul>
				<Button variant='black-arrow'>get an invite</Button>

				<p>Copyright {new Date().getFullYear()}. All Rights Reserved </p>
			</Container>
		</footer>
	);
};

export default Footer;
