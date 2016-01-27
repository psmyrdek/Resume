/* global Vue */

var projectsComponent = new Vue({
    
    el: '#projects',
    data : {
        projects: ProjectsModule.list
    }  
    
});