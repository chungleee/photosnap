import React from 'react';

const RightArrow = ({ className }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			height='15px'
			width='25px'
			className={className ? className : ''}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={2}
				d='M14 5l7 7m0 0l-7 7m7-7H3'
			/>
		</svg>
	);
};

export default RightArrow;
