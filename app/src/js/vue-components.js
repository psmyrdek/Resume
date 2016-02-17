/* global Vue */

var projectsComponent = new Vue({
    
    el: '#projects',
    data: {
        projects: ProjectsModule.list
    }  
    
});

var navbarComponent = new Vue({
   
   el: '#navbar',
   data: {
       isMenuVisible: false
   },
   methods: {
       toggleMenu: function() {
           this.isMenuVisible = !this.isMenuVisible;
       }
   }
    
});