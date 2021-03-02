import React from 'react';

const Text = ({ variant, children, className }) => {
	const CustomTag = `${variant}`;
	return <CustomTag className={`${className}`}>{children}</CustomTag>;
};

export default Text;
