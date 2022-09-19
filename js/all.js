$(document).ready(function () {
    $('.nav-link,a').click(function () {
        var t = $(this).attr('href');
        var st = $(t).offset().top - 90;
        $('html,body').animate({
            scrollTop: st
        }, 500);
    });
    $('#sub').click(function () {
        location.reload();
    })
});