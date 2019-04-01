$(function () {

    setTimeout(function () {
        $('.loader').fadeOut(300)
    },1000)

    $('.item1').click(function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
    })


})