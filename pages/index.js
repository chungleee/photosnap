import React from 'react';
import Button from '../components/Buttons/Button';
import Hero from '../components/Hero/Hero';
import HomeCard from '../components/HomeCard/HomeCard';

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
				button='get an invite'
			>
				<h1>create and share your photo stories.</h1>
				<p>
					Photosnap is a platform for photographers and visial storytellers. We
					make it easy to share photos, tell stories and connect with others.
				</p>
			</Hero>

			<HomeCard>
				<h1>
					beautiful stories <br /> every time
				</h1>
				<p>
					We provide design templates to ensure your stories look terrific.
					Easily add photos, text, embed maps and media from other networks.
					Then share your story with everyone.
				</p>
			</HomeCard>

			<HomeCard>
				<h1>designed for everyone</h1>
				<p>
					Photosnap can help you create stories that resonate with your
					audience. Our tool is designed for photographers of all levels,
					brands, businesses you name it.
				</p>
			</HomeCard>
		</div>
	);
};

export default Home;
