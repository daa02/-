// main.js

// gnb
$(function () {
    // 마우스 오버시 메뉴 열림
    $('.depth1').mouseover(function () {
        // class추가되면 보임
        $('.depth2').addClass('show');
        $('.depth2_bg').addClass('show');
        $('.header_wrap').addClass('show');
        $('.header_wrap').addClass('nav_bg');
        $('#main_logo').addClass('nav_bg');
    });

    // 마우스가 나가면 메뉴 닫힘
    $('.depth1 > li').mouseout(function () {
        $('.depth2').removeClass('show');
        $('.depth2_bg').removeClass('show');
        $('.header_wrap').removeClass('show');
        // $('.header_wrap').removeClass('nav_bg');
        // $('#main_logo').removeClass('nav_bg');
    });

});

// 모바일에서 스크롤이 맨 위일때 배경 지우기
$(function(){
    $(window).scroll(function() {
      if ($(this).scrollTop()) {
        $('.header_wrap').addClass('nav_bg');
        $('#main_logo').addClass('nav_bg');
      } else {
        $('.header_wrap').removeClass('nav_bg');
        $('#main_logo').removeClass('nav_bg');
      }
    });  

    // Swiper
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
          rotate: 35,
          stretch: -90,
          depth:100,
          modifier: 0.8,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
  });

