// Navbar toggle functionality
$(document).ready(function () {

    // When hamburger icon is clicked
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');       // Toggle the icon to X
        $('.navbar').toggleClass('nav-toggle'); // Toggle the navbar visibility
    });

    // When page is scrolled or loaded
    $(window).on('scroll load', function () {
        $('.fa-bars').removeClass('fa-times');      // Reset the icon
        $('.navbar').removeClass('nav-toggle');     // Hide the navbar
    
        if($(Window).scrollTop()  >  30){
            $('header').addClass('header-active');
        }else{
            $('header').removeClass('header-active');
        }
    });

});