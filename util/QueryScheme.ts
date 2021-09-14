export const LaunchpadQuery: object = {
    options: {
        select: {
            name: true,
            full_name: true,
            details: true,
            status: true,
        },
        populate: [
            {
                path: 'launches',
                select: {
                    name: true,
                    details: true,
                    date_unix: true,
                    'fairings.reused': true,
                },
            },
        ],
    },
};

export const launchQuery = JSON.stringify(LaunchpadQuery);
