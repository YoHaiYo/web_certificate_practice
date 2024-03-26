$(document).ready(function(){
  // slide 
  // ★ 바뀌는 부분 : marginTop
  setInterval(function () {
    $(".swiper-wrapper").animate({ "marginTop": -300 }, 300, function () {
        $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper")) // appendTo : 마지막으로 보내기
        $(".swiper-wrapper").css("marginTop", 0)
    })
  }, 3000)

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

