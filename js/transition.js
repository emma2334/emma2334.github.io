(function(){
  $( window ).on('scroll', function() {
    //$('#scroll-down-notice').css( "opacity", 0);
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

}).call(this);
