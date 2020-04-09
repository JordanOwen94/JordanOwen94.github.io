var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1Ijoiam9yZGFuLW93ZW4iLCJhIjoiY2s4azg3ZzVuMDU2ZjNkb2JpNzJxeTA1OSJ9.6VGU8KEHQp3t_xrTAMhYCg',
    showMarkers: false,
    theme: 'light',
    alignment: 'left',
    title: 'The Implications of Local Law 97 on NYC Property Owners',
    subtitle: 'What are the financial implications in order to comply with the law?',
    byline: 'By Amber Kim, Laura Kim and Jordan Owen',
    footer: 'DUSP Big Data 2020',
    chapters: [
        {
            id: 'Intro',
            title: 'Research Question',
            image: 'https://github.com/JordanOwen94/BigDataScroll/blob/master/NYC_Intro.jpg?raw=true',
            description: 'How can we make sense of what Local Law 97 requires?',
            location: {
                center: [-103.64148, 37.90622],
                zoom: 4.05,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Highlights',
            title: 'Highlights of Local Law 97',
            image: 'https://github.com/JordanOwen94/BigDataScroll/blob/master/LL97_Goals.png?raw=true',
            description: '1) Affects buildings greater than 25,000 SF, 2) Sets increasingly stringent limits on carbon emissions per SF in 2024 and 2030, 3) Allows flexibility to comply through renewable energy credits',
            location: {
                center: [-73.98087, 40.73651],
                zoom: 12.57,
                pitch: 56.5,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 

   {
            id: 'Impacts',
            title: 'Impacts of Local Law 97',
            image: 'https://github.com/JordanOwen94/BigDataScroll/blob/master/LL97_Impacts.png?raw=true',
            description: '1) Covers ~50,000 buildings or ~60% of the city’s building area, and 2) Requires a 26% decrease in covered building emissions by 2030',
            location: {
                center: [-74.00269, 40.75091],
                zoom: 11.88,
                pitch: 0,
                bearing: 31.25
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 

   {
            id: 'Retrofit_Cost',
            title: 'How much will it cost to retrofit existing buildings to comply with Local Law 97?',
            image: 'https://github.com/JordanOwen94/BigDataScroll/blob/master/Retrofit_Cost.png?raw=true',
            description: 'Residential buildings account for more square footage than commercial buildings, but commercial buildings have more complicated systems and requirements that will likely result in a higher retrofit cost.',
            location: {
                center: [-74.00269, 40.75091],
                zoom: 11.88,
                pitch: 0,
                bearing: 31.25
            },
            onChapterEnter: [],
            onChapterExit: []
        }, 




    ]
};
