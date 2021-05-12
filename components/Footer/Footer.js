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
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Container className={classes.footer__container}>
				<div className={classes.footer__logo}>
					<Link href='/' passHref>
						<Logo fill='#fff' />
					</Link>
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
						<Link href='/'>home</Link>
					</li>
					<li>
						<Link href='/stories'>stories</Link>
					</li>
					<li>
						<Link href='/features'>features</Link>
					</li>
					<li>
						<Link href='/pricing'>pricing</Link>
					</li>
				</ul>

				<Button
					className={classes.footer__invite__button}
					variant='black-arrow'
				>
					get an invite
				</Button>

				<p className={classes.footer__copyright}>
					Copyright {new Date().getFullYear()}. All Rights Reserved{' '}
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
