import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sipbuddy.vercel.app';
    const currentDate = new Date();

    return [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/planner`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/dashboard`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/my-plans`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/learn`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        // Calculator landing page
        {
            url: `${baseUrl}/calculator`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // Individual calculator pages
        {
            url: `${baseUrl}/calculator/sip`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/calculator/lumpsum`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/calculator/swp`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/calculator/income-tax`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/profile`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/auth`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        // More tools landing page
        {
            url: `${baseUrl}/more`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        // Individual tool pages
        {
            url: `${baseUrl}/more/find-advisor`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/more/finiq-challenge`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];
}
