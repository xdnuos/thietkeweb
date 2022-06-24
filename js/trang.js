$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('#scrolltop').fadeIn(500);
        } else {
            $('#scrolltop').fadeOut(80);
        }
    });
    $('#scrolltop').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
    });
    return false;

});
$(document).ready(function() {
    $('.titlenews1').mouseenter(function() {
        $('.imgnews').animate({
            opacity: 1
        });
    });
    $('.titlenews1').mouseleave(function() {
        $('.imgnews').animate({
            opacity: 0.8
        });
    });
    $('.bleft').click(function() {
        $('.tagname').animate({
            left: '-=50px'
        });
    });

});
$(document).ready(function() {
    $('.bright').click(function() {
        $('.tagname').animate({
            left: '+=50px'
        });
    });
});