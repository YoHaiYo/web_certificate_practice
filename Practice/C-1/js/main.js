$(document).ready(function(){
  // slide

  let slideIndex = 0;
  let slideNum = $(".swiper-slide").length  
  function fadeSlide(){
    slideIndex++
    slideIndex = slideIndex % slideNum
    // console.log(slideIndex)
    $(".swiper-slide").eq(slideIndex).addClass("on").siblings().removeClass("on")
  }
  function horizontalSlide(){
    $(".swiper-wrapper").animate({"marginLeft":-800}, 300, function(){
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
      $(".swiper-wrapper").css({"marginLeft":0})
    })
  }
  function verticalSlide(){
    $(".swiper-wrapper").animate({"marginTop":-350}, 300, function(){
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
      $(".swiper-wrapper").css({"marginTop":0})
    })
  }
  setInterval(fadeSlide, 3000)
})