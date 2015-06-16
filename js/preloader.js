$.get('./img/DSC00063.JPG', function(data){
  $('#preload').delay(2000).fadeOut(500, function(){
    $(".parallax_front").fadeIn();
    $(".parallax_base").fadeIn();
  });
});
