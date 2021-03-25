import React from 'react';

const MenuIcon = ({ className }) => {
	return (
		<svg
			className={`${className ? className : ''}`}
			xmlns='http://www.w3.org/2000/svg'
			width='15'
			height='10'
		>
			<g fillRule='evenodd'>
				<path d='M0 0h20v1H0zM0 5h20v1H0z' />
			</g>
		</svg>
	);
};
export default MenuIcon;
