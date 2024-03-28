$("document").ready(function(){

  function horizontalSilde(){
    $(".swiper-wrapper").animate({"marginLeft": -1200}, 300, function(){
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
      $(".swiper-wrapper").css({"marginLeft": 0})
    })
  }

  function verticalSilde(){
    $(".swiper-wrapper").animate({"marginTop": -300}, 300, function(){
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
      $(".swiper-wrapper").css({"marginTop": 0})
    })
  }
  
  let sildeIndex = 0;
  let slideNum = $(".swiper-slide").length
  function fadeSlide(){
    sildeIndex++
    sildeIndex = sildeIndex % slideNum
    $(".swiper-slide").eq(sildeIndex).addClass("on").siblings().removeClass("on")
  }

  setInterval(fadeSlide, 3000)
})