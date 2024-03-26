$(document).ready(function(){
  // slide
  // ★바뀌는부분 : count % slideNum 이 핵심
  let count = 0;
  let slideNum = $('.swiper-slide').length;

  setInterval(function(){
    count++;
    count = count % slideNum; // 1, 2, 0, 1 ...
    $('.swiper-slide').eq(count) // siblings()가 $('.swiper-slide').eq(count) 를 선택함.
      .addClass('on').siblings().removeClass('on') // siblings : 자신을 제외한 형제 요소 선택
  },3000) // 콜백함수로 빼줘서 메모리 아끼기

  // tab
  $(".tab h2").click(function(){
    // console.log($(this))
    $(this).parent().addClass("on").siblings().removeClass("on")
  })

  // popup
  $(".notice li:first-child").click(function(){
    $("#popup").show();
  })
  $("#popup button").click(function(){
    $("#popup").hide();
  })
})

