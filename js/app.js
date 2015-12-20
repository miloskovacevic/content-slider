$(document).ready(function () {
    //set options
    var speed = 500; // fade speed
    var autoswitch = true; //autoslider options
    var autoswitch_speed = 4000; // auto glider speed

    //add initial active class
    $('.slide').first().addClass('active');

    ///hide all slides
    $('.slide').hide();

    // show first slide
    $('.active').show();

    $('#next').on('click', NextSlide);

    $('#prev').on('click', LastSlide);

    //auto slider handler
    if(autoswitch == true){
        setInterval(NextSlide, autoswitch_speed);
    }

    // Switch to next slide
    function NextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    //switch to last slide
    function LastSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

});