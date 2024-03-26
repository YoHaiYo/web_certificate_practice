$(document).ready(function(){
  // $("body").addClass("GG")

  // swiper
  function slideHorizontal(){
    $(".swiper-wrapper").animate({"marginLeft":-1200}, 300, function(){
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
      $(".swiper-wrapper").css({"marginLeft":0})
    })
  }
  function slideVertical(){
    $(".swiper-wrapper").animate({"marginTop":-300}, 300, function(){
      $(".swiper-slide").eq(0).appendTo($(".swiper-wrapper"))
      $(".swiper-wrapper").css({"marginTop":0})
    })
  }

  let count = 0
  let slideNum = $(".swiper-slide").length
  function slideFade(){
    count++
    count = count % slideNum
    // console.log(count)
    $(".swiper-slide").eq(count).addClass("on").siblings().removeClass("on")
  }
  
  setInterval(slideFade, 3000)

  // tab
  $(".tab h2").click(function(){
    console.log($(this))
    $(this).parent().addClass("on").siblings().removeClass("on")
  })

  // popup
  $(".notice li:first-child").click(function(){
    // console.log("click")
    $("#popup").show()
  })
  $("#popup button").click(function(){
    // console.log("click")
    $("#popup").hide()
  })
})