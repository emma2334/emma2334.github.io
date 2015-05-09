$.get('./timeline.html', function(data){
  $('#timeline').append(data);
  setTimeout("$.getScript('./js/jquery.timeline.min.js');", 1000);
  setTimeout("$.getScript('./js/jquery.mCustomScrollbar.js');", 1500);
  setTimeout("$.getScript('./js/jquery.easing.1.3.js');", 1500);
  setTimeout("$.getScript('./js/image.js');", 1500);
  setTimeout("$.getScript('./js/lightbox.js');", 1500);
  setTimeout("$.getScript('./js/timeline.js');", 2000);
  $.get('./timeline_extend.html', function(data){
    $('#timeline').append(data);
  });
});

