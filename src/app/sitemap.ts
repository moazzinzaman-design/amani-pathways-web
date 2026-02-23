import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://amanipathways.co.uk';
    const lastModified = new Date();

    const routes = [
        '',
        '/about',
        '/services',
        '/compliance',
        '/commissioners',
        '/interactive-map',
        '/referrals',
        '/welcome-pack',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));
}
