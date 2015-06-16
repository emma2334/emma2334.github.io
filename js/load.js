$(function(){
  var flag = 0;
  $( window ).on('scroll', function() {
    if(($('#timeline').offset().top-progress)<$(window).height()/2.5 && flag==0){
      flag=1;
      $.get('./timeline.html', function(data){
        $('#timeline').append(data);
        $.getScript('./js/jquery.timeline.min.js');
        $.getScript('./js/jquery.mCustomScrollbar.js');
        $.getScript('./js/jquery.easing.1.3.js');
        $.getScript('./js/image.js');
        $.getScript('./js/lightbox.js');
        $.get('./timeline_extend.html', function(extend){
          $('#timeline').append(extend);
          $.getScript('./js/timeline.js');
      });
      });
    }
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
