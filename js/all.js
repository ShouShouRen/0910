$(document).ready(function () {
    // $(window).scroll(function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll >= 120) {
    //         $('.navbar').addClass('bg-op')
    //     } else {
    //         $('.navbar').removeClass('bg-op')
    //     }
    // })
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