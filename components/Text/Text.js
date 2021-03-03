import React from 'react';

const Text = ({ variant, children }) => {
	const CustomTag = `${!variant ? 'p' : variant}`;

	return <CustomTag>{children}</CustomTag>;
};

export default Text;
