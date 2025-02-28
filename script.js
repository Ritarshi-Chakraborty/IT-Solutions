$(document).ready(function() {
    $('nav .hamburger').click(function() {
        $('nav ul').css({
            'left': '0',
            'transition': 'all .4s'
        })
        $('body').css('overflow','hidden')
        $('nav ul').addClass('overlay')
        $(document).css('overflow','hidden')
    })

    $('nav ul i').click(function() {
        $('nav ul').css({
            'left': '-15rem',
            'transition': 'all .4s'
        })
        $('nav ul').removeClass('overlay')
        $('body').css('overflow','auto')
        $(document).css('overflow','auto')
    })

    $('nav ul li a').click(function() {
        $('nav ul').css({
            'left': '-15rem',
            'transition': 'all .4s'
        })
        $('nav ul').removeClass('overlay')
        $('body').css('overflow','auto')
        $(document).css('overflow','auto')
    })
})