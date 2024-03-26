$(document).ready(function(){
  // $("body").addClass("GG")

  // swiper
  function myswiper(){
    $(".swiper-wrapper").animate({"marginLeft":-1200}, 300, function(){
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
      $(".swiper-wrapper").css({"marginLeft":0})
    })
  }
  setInterval(myswiper, 3000)

  // tab
  $(".tab h2").click(function(){
    console.log($(this))
    $(this).parent().addClass("on").siblings().removeClass("on")
  })
})