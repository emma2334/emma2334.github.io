$.get('./img/DSC00063.JPG', function(data){
  // $('#bg1').css('background-image', 'url("./img/DSC00063.JPG")')
  $('#preload').delay(2000).fadeOut(500);
  $(".parallax_front").css('display', '');
  $(".parallax_base").css('display', '');
  // $('.parallax').width($(window).width());
});
