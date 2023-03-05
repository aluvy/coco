$(document).ready(function() {

    var screenSize, screenHeight;
    
    /* url */
    let myURL = $(location).attr("href").split("/");
    myURL = myURL[myURL.length-1];
    myURL = myURL.replace(".html", "");

    $('#content .pagettl h2').html(myURL);

    function screen_size(){
        screenSize = $(window).width(); //스크린의 너비
        screenHeight = $(window).height();  //스크린의 높이

        //$("#content").css('margin-top',screenHeight);
        $('#content .pagettl').css('height', screenHeight);

        if( screenSize > 768){
            $(".videoBox img").attr('src','assets/images/' + myURL + '/vis.jpg');
        }
        if(screenSize <= 768){
            $(".videoBox img").attr('src','assets/images/' + myURL +  '/vis_1024.jpg');
        }
    }
    screen_size();


    $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
        screen_size();
    });



    // CSS scroll motion
    var kframe = $('.kframe');
    var myTop = [];
    var windowHeight = $(window).height(); // 창 높이 값
    var windowTop = $(window).scrollTop(); // 창 탑 값
    var value = windowTop + windowHeight - 300;

    function kframeValue(){
        kframe = $('.kframe');
        windowHeight = $(window).height(); // 창 높이 값
        windowTop = $(window).scrollTop(); // 창 탑 값
        value = windowTop + windowHeight - 300;
    };
    
    $(window).resize(function(){
        kframeValue();
    });


    $(document).scroll(function(){

        kframeValue();

        for(var i=0; i<kframe.length; i++){

            myTop[i] = $('.kframe:eq(' + i + ')').offset().top;
            
            if(value >= myTop[i]){
                $('.kframe:eq(' + i + ')').addClass('active');
            }
        }
    });

});