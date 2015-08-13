/*---------------------------
  Preload
 ---------------------------*/
$.get('./img/DSC00063.JPG', function(data){
  $('#preload').delay(2000).fadeOut(500, function(){
    $(".parallax_front").fadeIn();
    $(".parallax_base").fadeIn();
  });
}).fail(function(){
  var msg = $(document.createElement('div')).css('display', 'none').attr('id', 'preload_error').html('Something wrong.<br>Please refresh the page');
  $('#preload').append(msg);
  $("#preload_error").fadeIn(500);
});



/*---------------------------
  Transition
 ---------------------------*/
(function(){
  $( window ).on('scroll', function() {
    progress = parseFloat($(document).scrollTop());
    var e = progress/$(window).height();

    var a=$('#scroll-down-notice'), b=$('#slogan'), c=0.2-e;
    if(c>0){
      a.css("opacity", 4*c);
      b.css("opacity", 3*c);
    }else{
      a.css("opacity", 0);
      b.css("opacity", 0);
    }


    if(progress*2.5+10<($('.parallax_front').height()-$(window).height())) $('.parallax_front').css('top', -progress*1.5);

    if(progress>0){
      $('#quote').removeClass("transparent");
      $('#about').removeClass("transparent");
    }

    if(($('#skills').offset().top-progress)<$(window).height()/2.5){
      for(var i=0; i<$('.score').length; i++){
        var level = $('.score').eq(i).attr('data-score');
        $('.score').eq(i).addClass('score-'+level);
      }
    }
  });

})();




/*---------------------------
  Skill table
 ---------------------------*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  for(var i=0; i<$('.score').length; i++){
    score(i);
  }

  function score(i){
    var e=['No idea', 'Learned', 'Average', 'Good', 'Over average', 'Excellent'];
    var n=$('.score').eq(i), k=n.attr('data-score');
    n.find('.rank').html(e[k]);
    n.attr('data-original-title', e[k]);
  }
});



/*---------------------------
  Alert
 ---------------------------*/
function github_alert(){
  alert("It's a private repository.");
}
function link_alert(){
  alert("The link is empty.");
}



/*---------------------------
  Loading
 ---------------------------*/
$(function(){
  var flag = 0;
  $( window ).on('scroll', function() {
    if(($('#timeline').offset().top-progress+50)<$(window).height() && flag==0){
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

    if(($('#activity').offset().top-progress+50)<$(window).height() && flag==1){
      flag=2;
      $.get('./activities.html', function(data){
        $('#activity').append(data);
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
