$(document).ready(function () {
    //화면이 준비되면 실행해라.
    //setInterval,animate,css,appendTo
    // 태그객체.animate({},speed,function());
    // 태그객체.css(스타일,값)
    // 태그객체.appendTo(옮겨질객체)
    const aniw = $('.swiper-slide').width();

    setInterval(function(){
        $('.swiper-wrapper').animate({"marginLeft":-aniw},400,function(){
            $('.swiper-slide').eq(0).appendTo($('.swiper-wrapper'))
            $('.swiper-wrapper').css("marginLeft",0)
        })
    },3000);
})