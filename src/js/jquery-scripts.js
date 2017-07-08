$(function() {
    
    var $navbarMenuBtn = $('.menu-toggle-btn'),
        $navbarMenu = $('.page-navbar-menu'),
        $navbar = $('#page-navbar');
    
    var menuStatusClass = 'menu-visible',
        menuTransitionSpeed = 200;
    
    $navbarMenuBtn.click(function() {
        if($navbarMenu.hasClass(menuStatusClass)) {
            hideMenu();
        } else {
            showMenu();
        }
    });
    
    $navbarMenuBtn.mouseenter(function() {
       showMenu(); 
    });
    
    $navbar.mouseleave(function() {
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