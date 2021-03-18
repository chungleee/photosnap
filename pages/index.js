import React from 'react';
import Hero from '../components/Hero/Hero';

const Home = () => {
	return (
		<div>
			<Hero
				images={[
					{
						src: '/assets/home/mobile/create-and-share.jpg',
						media: '375px',
					},
					{
						src: '/assets/home/tablet/create-and-share.jpg',
						media: '768px',
					},
					{
						src: '/assets/home/desktop/create-and-share.jpg',
						media: '1440px',
					},
				]}
				alt='Person on lake boardwalk'
				// image={{
				// 	src: '/assets/home/mobile/create-and-share.jpg',
				// 	srcSet: [
				// 		'/assets/home/tablet/create-and-share.jpg 768w',
				// 		'/assets/home/desktop/create-and-share.jpg 1440w',
				// 	],
				// 	alt: 'Person on lake boardwalk',
				// }}
				button='get an invite'
			>
				<h1>create and share your photo stories.</h1>
				<p>
					Photosnap is a platform for photographers and visial storytellers. We
					make it easy to share photos, tell stories and connect with others.
				</p>
			</Hero>
		</div>
	);
};

export default Home;
