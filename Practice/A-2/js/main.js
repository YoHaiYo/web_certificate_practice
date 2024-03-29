$("document").ready(function(){

  function horizontalSlide(){
    $(".swiper-wrapper").animate({"marginLeft": -1200}, 300, function(){
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
      $(".swiper-wrapper").css({"marginLeft": 0})
    })
  }
  function verticalSlide(){
    $(".swiper-wrapper").animate({"marginTop": -300}, 300, function(){
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
      $(".swiper-wrapper").css({"marginTop": 0})
    })
  }

  let slideIndex = 0;
  let slideNum = $(".swiper-slide").length
  function fadeSlide(){
    slideIndex++
    slideIndex = slideIndex % slideNum
    $(".swiper-slide").eq(slideIndex).addClass("on").siblings().removeClass("on")
  }

  setInterval(fadeSlide, 3000)
})