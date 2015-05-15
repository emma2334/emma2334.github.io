$.get('./img/DSC00063.JPG', function(data){
  // $('#bg1').css('background', 'url("./img/DSC00063.JPG")')
  $('#preload').delay(200).fadeOut(500)
  $(".parallax_front").css('display', '');
  $(".parallax_base").css('display', '');
  $('.parallax').width($(window).width());;
});
