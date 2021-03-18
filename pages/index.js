import React from 'react';
import Hero from '../components/Hero/Hero';
import HomeCard from '../components/HomeCard/HomeCard';

const Home = () => {
	return (
		<div>
			<Hero alt='Person on lake boardwalk' button='get an invite'>
				<h1>create and share your photo stories.</h1>
				<p>
					Photosnap is a platform for photographers and visial storytellers. We
					make it easy to share photos, tell stories and connect with others.
				</p>
			</Hero>

			<HomeCard
				images={{
					mobile: '/assets/home/mobile/beautiful-stories.jpg',
					tablet: '/assets/home/tablet/beautiful-stories.jpg',
					desktop: '/assets/home/desktop/beautiful-stories.jpg',
					alt: 'Laptop on workstation',
				}}
			>
				<h1>
					beautiful stories <br /> every time
				</h1>
				<p>
					We provide design templates to ensure your stories look terrific.
					Easily add photos, text, embed maps and media from other networks.
					Then share your story with everyone.
				</p>
			</HomeCard>

			<HomeCard
				images={{
					mobile: '/assets/home/mobile/designed-for-everyone.jpg',
					tablet: '/assets/home/tablet/designed-for-everyone.jpg',
					desktop: '/assets/home/desktop/designed-for-everyone.jpg',
					alt: 'Photographer with equipment',
				}}
			>
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
