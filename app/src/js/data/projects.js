var ProjectsModule = (function(module){
    
    module.list = [
        {
            date: '03.2015',
            title: 'Coordinator',
            award: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare nec urna sit amet eleifend. Nam non tellus sed leo rhoncus blandit eget sed nibh. Etiam vel dolor lectus. Nam elementum placerat accumsan. Pellentesque lacinia neque at diam ornare, ut molestie tortor tempus. ',
            features: ['.NET', 'AngularJS', 'SignalR'],
            website: 'http://www.coordinator.pl'
        },
        {
            date: '03.2015',
            title: 'Untwisted',
            award: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare nec urna sit amet eleifend. Nam non tellus sed leo rhoncus blandit eget sed nibh. Etiam vel dolor lectus. Nam elementum placerat accumsan. Pellentesque lacinia neque at diam ornare, ut molestie tortor tempus. ',
            features: ['.NET', 'Real-Time'],
            contributors: [
                {
                    name: 'Jacek',
                    profile: 'http://www.onet.pl'
                },
                {
                    name: 'Ania',
                    profile: 'http://www.onet.pl'
                },
            ]
        },
        {
            date: '03.2015',
            title: 'IT Learning',
            award: true,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare nec urna sit amet eleifend. Nam non tellus sed leo rhoncus blandit eget sed nibh. Etiam vel dolor lectus. Nam elementum placerat accumsan. Pellentesque lacinia neque at diam ornare, ut molestie tortor tempus. ',
            features: ['.NET', 'WebAPI', 'ReactJS'],
            website: 'www.coordinator.pl'
        }
    ];
    
    return module;
    
})(ProjectsModule || {});