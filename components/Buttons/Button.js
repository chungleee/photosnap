import React from 'react';
import RightArrow from '../Icons/RightArrow/RightArrow';
import classes from './Button.module.scss';

const Button = ({ children, variant, className }) => {
	return (
		<button
			className={`${className} ${
				!variant
					? classes.button__default
					: variant === 'white'
					? classes.button__white
					: variant === 'arrow'
					? classes.button__default__arrow
					: variant === 'black-arrow'
					? classes.button__black__arrow
					: ''
			}`}
		>
			{children}

			<RightArrow
				className={`${
					variant === 'arrow'
						? classes.show
						: variant === 'black-arrow'
						? classes.show
						: classes.hidden
				}`}
			/>
		</button>
	);
};

export default Button;
