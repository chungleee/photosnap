export const heroImages = {
	mobile: '/assets/pricing/mobile/hero.jpg',
	tablet: '/assets/pricing/tablet/hero.jpg',
	desktop: '/assets/pricing/desktop/hero.jpg',
};

export const pricingData = [
	{
		plan: 'basic',
		description:
			'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
		price: '19.00',
	},
	{
		plan: 'pro',
		description:
			'More advanced features available. Recommended for photography vetarans and professionals.',
		price: '39.00',
	},
	{
		plan: 'business',
		description:
			'Additional features available such as more detailed metrics. Recommended for business owners.',
		price: '99.00',
	},
];

export const features = [
	{
		feature: 'unlimited story posting',
		tiers: ['basic', 'pro', 'business'],
	},
	{
		feature: 'unlimited photo upload',
		tiers: ['basic', 'pro', 'business'],
	},
	{
		feature: 'embedding custom content',
		tiers: ['pro', 'business'],
	},
	{
		feature: 'customize metadata',
		tiers: ['pro', 'business'],
	},
	{
		feature: 'advanced metrics',
		tiers: ['business'],
	},
	{
		feature: 'photo downloads',
		tiers: ['business'],
	},
	{
		feature: 'search engine indexing',
		tiers: ['business'],
	},
	{
		feature: 'custom analytics',
		tiers: ['business'],
	},
];
