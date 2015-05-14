$.get('./timeline.html', function(data){
  $('#timeline').append(data);
  $.getScript('./js/jquery.timeline.min.js');
  $.getScript('./js/jquery.mCustomScrollbar.js');
  $.getScript('./js/jquery.easing.1.3.js');
  $.getScript('./js/image.js');
  $.getScript('./js/lightbox.js');
  $.get('./timeline_extend.html', function(data){
    $('#timeline').append(data);
    $.getScript('./js/timeline.js');
  });
});

$.get('./works.html', function(data){
  $('#works .container').append(data);
  $(function(){
    $('figure.effect-zoe').hover(
      function(){
        $(this).find('.mask').css('opacity', '0.3');
      },
      function(){
        $(this).find('.mask').css('opacity', '');
      });
  });
});
