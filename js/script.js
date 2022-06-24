$(document).ready(function() {
    var show = 4;
    var w = $('#slider').width() / show;
    var l = $('.slide').length;

    $('.slide').width(w);
    $('#slider-container').width(w * l);

    function slider() {
        $('.slide:first-child').animate({
            marginLeft: -w
        }, 'slow', function() {
            $(this).appendTo($(this).parent()).css({
                marginLeft: 0
            })
        })
    }
    var timer = setInterval(slider, 2000);

    $('#slider').hover(function() {
        clearInterval(timer)
    }, function() {
        timer = setInterval(slider, 2000)
    })
    $('.di-dau-img').height($('.di-dau-img').width());


});

$(document).ready(function() {
    let crap1 = document.getElementById('crap1');
    let crap2 = document.getElementById('crap2');
    let crap3 = document.getElementById('crap3');
    let text = document.getElementById('text');
    let scrolldown = $('#scroll-down');

    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        text.style.top = 20 + value * -0.2 + '%';
        crap1.style.top = 10 + value * -0.5 + '%';
        crap1.style.left = value * -0.2 + '%';
        crap2.style.top = value * -0.5 + '%';
        crap2.style.left = value * 0.1 + '%';
        crap3.style.top = value * -0.3 + '%';
        crap3.style.left = value * 0.01 + '%';
        // scroll down
        if (value > 200) {
            scrolldown.hide();
        } else {
            scrolldown.show();
        }
    })
});