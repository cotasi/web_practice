$(document).ready(function () {
    //화면이 준비되면 실행해라.
    //setInterval,animate,css,appendTo
    // 태그객체.animate({},speed,function());
    // 태그객체.css(스타일,값)
    // 태그객체.appendTo(옮겨질객체)
    const anih = $('.swiper-slide').height();

    setInterval(function(){
        $('.swiper-wrapper').animate({"marginTop":-anih},400,function(){
            $('.swiper-slide').eq(0).appendTo($('.swiper-wrapper'))
            $('.swiper-wrapper').css("marginTop",0)
        })
    },3000);
})