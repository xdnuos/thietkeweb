$(function () {
    const overlays = $('.zoom-image');
    const photoItems = $('.photos-item')
    const images = $('.zoom-image img');
    photoItems.click(function () {
        $(this).children('.zoom-image').addClass('show');
    })
    overlays.click(function (e) {
        e.stopPropagation();
        $(this).removeClass('show');
    })
    images.click(function (e) {
        e.stopPropagation();
    })
})