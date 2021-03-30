$('button[data-filter]').click(function () {
    let attr = $(this).attr('data-filter');
    if (attr === 'all') {
        $('div[data-filter]').stop().slideDown(500)
    } else {
        $('div[data-filter]').stop().slideUp(500)
    }
    $(`div[data-filter=${attr}]`).stop().slideDown(500)
})

$('.nav').css({
    position: 'fixed',
    top: $(window).height() - $('.nav').outerHeight() + 'px',
    width: 100 + '%',
    zIndex: 10
 })

$(window).on('scroll', function(){
    let editPosition = $(window).height() - $('.nav').outerHeight() - $(window).scrollTop();
    if (editPosition > 0) {
        $('.nav').css({
            top:editPosition + 'px',
        })
    } else {
        $('.nav').css({
            top: 0,
        })
    }
})

$('.works__card').click(function(){
    $(this).children('.works__card-child').clone().appendTo('.cover__window');
    let link = $('.works__card-child').children($('.works__link'));
    link.css('display', 'block');
    $('.cover').css('display', 'flex');
    $('.works__card-child').children($('.works__card-img')).css({
        width: '50%',
        height: '60%',
    })
    $('.works__cards').css('display', 'none');
    setTimeout(() => {
        $('.cover').css('opacity', '1');
    }, 100);
    setTimeout(() => {
        $('.cover__window').css('top', '20%');
    }, 200);
    $('body').css('overflow', 'hidden');
    $('.cover__btn').click(function(){
        location.reload();
    })
})

$('#prev').css('display', 'none');

$('#next').click(function(){
    $('.comment').css('display', 'none');
    $('.comment2').css('display', 'flex');
    $('#next').css('display', 'none');
    $('#prev').css('display', 'flex');
    $('#prev').click(function(){
        $('.comment2').css('display', 'none');
        $('.comment').css('display', 'flex');
        $('#next').css('display', 'flex');
        $('#prev').css('display', 'none');
    })
})

$('.sales__btn').click(function(){
    $('.sales__btn').css({
        padding: '10px',
        transition: '.5s',
    });
})
