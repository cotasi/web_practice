$(document).ready(function () {
    //화면이 준비되면 실행해라.
    //setInterval,animate,css,appendTo
    // 태그객체.animate({},speed,function());
    // 태그객체.css(스타일,값)
    // 태그객체.appendTo(옮겨질객체)
    let count = 0;

    setInterval(fadeAni,3000);
    
    function fadeAni() { // 선언적 함수
        count++;
        count = count % $('.swiper-slide').length;
        $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on");
    }

})