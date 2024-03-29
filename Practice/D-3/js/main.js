$("document").ready(function(){
  // slide
  let slideIndex = 0;
  let slideNum = $(".swiper-slide").length
  function fadeSlide(){
    slideIndex++
    slideIndex = slideIndex % slideNum
    $(".swiper-slide").eq(slideIndex).addClass("on").siblings().removeClass("on")
  }
  setInterval(fadeSlide, 3000)

  // tab
  $(".tab h2").click(function(){
    $(this).parent().addClass("on").siblings().removeClass("on")
  })
})