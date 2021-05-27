import Prismic from '@prismicio/client';

const apiEndpoint = 'https://photosnap.cdn.prismic.io/api/v2';

export const Client = Prismic.client(apiEndpoint);
