var ProjectsModule = (function(module){
    
    module.list = [
        {
            date: '02.2016',
            title: 'Web Resume',
            description: 'Web Resume is a lightweight web application built to sum up our recent project and achievements. We decided to create a simple website, with clean, responsive design - it should be a modern version of our CV. You can find here a summary of our activity - read more about our approaches to Microsoft Imagine Cup, check out our web applications and, like it is said above - let\'s get to know each other a little bit better.',
            features: ['SCSS', 'Vue.JS', 'Gulp']
        },
        {
            date: '08.2015',
            title: 'IT Learning',
            description: 'IT Learning is a brand new platform dedicated to software development students. Sure... we know that you\'ve heard about some other apps based on this idea but who said they can\'t be improved? We tried to do our best! Whole development stage was made in truly agile approach - tasks were divided among iterations, every idea was consulted with potential users and some well-known experts from IT companies, and to be honest - there is still a lot of work to do in front of us. And a lot of knowledge have already been gained!',
            features: ['ASP NET Core 1.0', 'Angular JS', 'LibGit2Sharp'],
            website: 'http://www.poznajprogramowanie.pl',
            screens: [
                {
                    name: 'itlearning_1.jpg',
                    path: './static/itlearning_1.jpg',
                    path_mini: './static/itlearning_1mini.jpg'
                },
                {
                    name: 'itlearning_2.jpg',
                    path: './static/itlearning_2.jpg',
                    path_mini: './static/itlearning_2mini.jpg'
                },
                {
                    name: 'itlearning_3.jpg',
                    path: './static/itlearning_3.jpg',
                    path_mini: './static/itlearning_3mini.jpg'
                },
                {
                    name: 'itlearning_4.jpg',
                    path: './static/itlearning_4.jpg',
                    path_mini: './static/itlearning_4mini.jpg'
                },
                            {
                    name: 'itlearning_5.jpg',
                    path: './static/itlearning_5.jpg',
                    path_mini: './static/itlearning_5mini.jpg'
                }
            ]
        },
        {
            date: '06.2015',
            title: 'WMS',
            description: 'It was a real challenge for us - Warehouse Management System, based on Microsoft Dynamics NAV 2015 (ERP-class solution), integrated with 3rd party APIs, with brand new hardware from Panasonic, and of course Windows Phone 8.1 - quite a lot of things to do, don\'t you think? We\'ve created a solid foundation for modern mobile application dedicated to warehouse employees, based on experience and knowledge of NAV24 experts and consultants. Find more about this project at NAV24\'s website.',
            features: ['Windows Phone 8.1', 'MVVM', 'Microsoft Dynamics NAV'],
            screens: [
                {
                    name: 'wms_1.jpg',
                    path: './static/wms_1.jpg',
                    path_mini: './static/wms_1mini.jpg'
                }
            ]
        },
        {
            date: '03.2015',
            title: 'NAV24.pl',
            description: 'It\'s pretty simple - modern company needs modern website. Website of well-known, forward-looking NAV24 company should be as responsive as possible. With some help from NAV24\'s graphic designers we\'ve created a fresh landing page with dynamic content based on Angular.JS framework. It\'s also worth to mention that this website uses lightweight CMS system created from scratch and some other dedicated innovations.',
            features: ['ASP.NET MVC', 'LESS', 'RWD'],
            website: 'http://www.nav24.pl'
        },
        {
            date: '02.2015',
            title: 'Untwisted',
            award: 'Microsoft Imagine Cup 2015 - 3rd Place',
            description: 'Our biggest success - 3rd place in Poland in Microsoft Imagine Cup 2015 contest - Innovation category. Untwisted was the most complex project which we\'ve made to this day. Except whole development process we had to create and coordinate a real product campaign. Starting from professional demo movie made by students from Film School of Łódź, through business plan for our prototype application and a lot more, at the IC finals we\'ve been appreciated by jury as one of top three teams from 2015 edition. It was another evidence for us that teamwork results in great achievements for all of us.',
            features: ['Web API 2', 'SignalR', 'Android'],
            website: 'http://untwisted.azurewebsites.net/',
            contributors: [
                {
                    name: 'Jacek',
                    profile: 'https://www.linkedin.com/in/jacekfilo'
                },
                {
                    name: 'Ania',
                    profile: 'https://www.linkedin.com/in/anna-garncarczyk-27b571a5'
                },
            ],
            screens: [
                {
                    name: 'untwisted_1.jpg',
                    path: './static/untwisted_1.jpg',
                    path_mini: './static/untwisted_1mini.jpg'
                },
                {
                    name: 'untwisted_2.jpg',
                    path: './static/untwisted_2.jpg',
                    path_mini: './static/untwisted_2mini.jpg'
                },
                {
                    name: 'untwisted_3.jpg',
                    path: './static/untwisted_3.jpg',
                    path_mini: './static/untwisted_3mini.jpg'
                },
                {
                    name: 'untwisted_4.jpg',
                    path: './static/untwisted_4.jpg',
                    path_mini: './static/untwisted_4mini.jpg'
                },
                            {
                    name: 'untwisted_5.jpg',
                    path: './static/untwisted_5.jpg',
                    path_mini: './static/untwisted_5mini.jpg'
                }
            ],
            presentation: './static/untwisted.pdf'
        },
        {
            date: '01.2015',
            title: 'Client\'s Dashboard',
            description: 'Responsible providers of software solutions should be constantly available for their customers. It was the main idea behind Client\'s Dashboard - modern web application for everyone who would like to check the status of it\'s orders and payments in every moment of day. Described application is based on efficient Microsoft Dynamics NAV ERP system and OData protocol to make the whole experience even better.',
            features: ['OData', 'Microsoft Dynamics NAV', 'ASP.NET MVC']
        },
        {
            date: '11.2014',
            title: 'Rzeźbiarstwo.pl',
            description: 'Modern and responsive website prepared for company which creates wood sculptures. We refreshed whole design of it, prepared infrastructure, and made some visible improvements in user experience. Site\'s gallery can be easily managed by administrators now, what was a great improvement for it\'s owners.',
            features: ['ASP.NET MVC', 'Dedicated CMS', 'jQuery'],
            website: 'http://rzezbiarstwo.pl/en-US/'
        },
        {
            date: '09.2014',
            title: 'Coordinator',
            award: 'Microsoft Imagine Cup 2014 - Top 30',
            description: 'Coordinator is a high-performance, real-time system dedicated to volunteer firefighters. With our solution they can easily cooperate with each other during emergency situations. Coordinator is also a social network for teams of firefighters who can set up their profiles, work and chat in teams and manage reports from actions there. It is based on ASP.NET MVC platform and SignalR library which helped us to create real-time data flow inside our solution. Coordinator was probably the most important project for us just because it was a first project which we\'ve managed (as we believe - successfully) together.',
            features: ['SignalR', 'Cross-platform', 'Google Maps API'],
            website: 'http://coordinatorprototype.azurewebsites.net/',
            screens: [
                {
                    name: 'coordinator_1.jpg',
                    path: './static/coordinator_1.jpg',
                    path_mini: './static/coordinator_1mini.jpg'
                },
                {
                    name: 'coordinator_2.jpg',
                    path: './static/coordinator_2.jpg',
                    path_mini: './static/coordinator_2mini.jpg'
                },
                {
                    name: 'coordinator_3.jpg',
                    path: './static/coordinator_3.jpg',
                    path_mini: './static/coordinator_3mini.jpg'
                },
                {
                    name: 'coordinator_4.jpg',
                    path: './static/coordinator_4.jpg',
                    path_mini: './static/coordinator_4mini.jpg'
                },
                {
                    name: 'coordinator_5.jpg',
                    path: './static/coordinator_5.jpg',
                    path_mini: './static/coordinator_5mini.jpg'
                }
            ],
            presentation: './static/coordinator.pdf'
        }
    ];
    
    return module;
    
})(ProjectsModule || {});