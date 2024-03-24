$(document).ready(function(){

  // tab
  $(".tab h2").click(function(){
    // console.log($(this))
    $(this).parent().addClass("on").siblings().removeClass("on")
  })
})