$(function() {
    
    var $navbarMenuBtn = document.querySelector('.menu-toggle-btn'),
        $navbarMenu = document.querySelector('.page-navbar-menu'),
        $navbar = document.querySelector('#page-navbar');
    
    var menuStatusClass = 'menu-visible',
        menuTransitionSpeed = 200;
    
    $navbarMenuBtn.addEventListener('click', function() {
        if($navbarMenu.hasClass(menuStatusClass)) {
            hideMenu();
        } else {
            showMenu();
        }
    });
    
    $navbarMenuBtn.addEventListener('mouseenter', function() {
       showMenu(); 
    });
    
    $navbar.addEventListener('mouseleave', function() {
        hideMenu();
    });
    
    function showMenu() {
        $navbarMenu.addClass(menuStatusClass);
        $navbarMenu.show(menuTransitionSpeed);
    }
    
    function hideMenu() {
        $navbarMenu.removeClass(menuStatusClass);
        $navbarMenu.hide(menuTransitionSpeed);
    }
    
});