import React from 'react';

const Hero = ({ children }) => {
	console.log(children);
	return (
		<div>
			{children.map((child) => {
				return (
					<child.type key={child.props.children}>
						{child.props.children}
					</child.type>
				);
			})}
		</div>
	);
};

export default Hero;
