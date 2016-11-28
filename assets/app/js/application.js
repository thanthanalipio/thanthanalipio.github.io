$(document).ready(function () {
    $('.arrow-left').hover(
    function () {
        $('.work-word').addClass('fadeInLeft');
    }, function () {
        $('.work-word').removeClass('fadeInLeft');
    }
    );

    $('.arrow-right').hover(
    function () {
        $('.info-word').addClass('fadeInRight');
    }, function () {
        $('.info-word').removeClass('fadeInRight');
    }
    );

    ////Work
    $("#right").click(function () {
        $('#work').addClass('left-center');
        animate();
    });

    $(".overlay-menu li:nth-child(2)").click(function () {
        $('#overlay').removeClass('open');
        $('.button_container').removeClass('active');
        $('#info').removeClass('right-center');
        $('#work').addClass('left-center');
        animate();
    });

    ////Info
    $("#left").click(function () {
        $('#info').addClass('right-center');
        animate();
    });
    $(".overlay-menu li:nth-child(3)").click(function () {
        $('#overlay').removeClass('open');
        $('.button_container').removeClass('active');
        $('#work').removeClass('left-center');
        $('#info').addClass('right-center');
        animate();
    });
    ////Home
    $(".overlay-menu li:nth-child(1)").click(function () {
        $('#overlay').removeClass('open');
        $('.button_container').removeClass('active');
        $('#work').removeClass('left-center');
        $('#info').removeClass('right-center');
        animate();
    });


    $("#right2").click(function () {
        $('#work').removeClass('left-center');
        animate();
    });

    $("#left2").click(function () {
        $('#info').removeClass('right-center');
        animate();
    });

    ///Div Animate INFO
    function animate() {
        if ($('#info').hasClass('right-center')) {
            $('.profile-holder .media > *').each(function (i) {

                setTimeout(function () {
                    $('.profile-holder .media > *').eq(i).addClass('is-showing');
                }, (700 * (Math.exp(i * 0.14))) - 700);
            });

        }
        else if ($('#work').hasClass('left-center')) {
            $('.work-holder > figure').each(function (i) {
                setTimeout(function () {
                    $('.work-holder > figure').eq(i).addClass('is-showing');
                }, (700 * (Math.exp(i * 0.14))) - 700);
            });            
        }
        else {
            $('.profile-holder .media > *').removeClass('is-showing');
            $('.work-holder > figure').removeClass('is-showing');
        }
    }


    ////Image Hover
    var myImages = new Array("1.png", "2.png");
    $('.profile-pic').hover(
        function () {
            var random = myImages[Math.floor(Math.random() * myImages.length)];
            random = 'assets/app/img/' + random;
            $(this).attr('src', random);
        }, function () {
            $(this).attr('src', 'assets/app/img/profile-pic.png');
        }
        );
    ///Menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
<<<<<<< HEAD

    //Scroll Menu
    $('#work').scroll(function () {
        if ($(this).scrollTop() > 180) {
            $(".navbar").addClass("addHeaderBg");
            $(".navbar-brand").addClass("logo-resize");
        }
        else {
            $(".navbar").removeClass("addHeaderBg");
            $(".navbar-brand").removeClass("logo-resize");
        }
    });
    $('#info').scroll(function () {
        if ($(this).scrollTop() > 180) {
            $(".navbar").addClass("addHeaderBg");
            $(".navbar-brand").addClass("logo-resize");
        }
        else {
            $(".navbar").removeClass("addHeaderBg");
            $(".navbar-brand").removeClass("logo-resize");
        }
    });
<<<<<<< HEAD

    //Pre loader
    $(window).load(function () {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");;
    });
=======
>>>>>>> origin/master
=======
>>>>>>> parent of f4c4510... New changes
});