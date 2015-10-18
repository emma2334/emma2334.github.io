/*---------------------------
  Preload
 ---------------------------*/
var imgUrl = $('#bg1').css('background-image').replace(/url\(("|')?/, '').replace(/("|')?\)/,'');
$.get(imgUrl, function(data){
  $('#preload').delay(2000).fadeOut(500, function(){
    $('body').removeAttr('style');
    $('.parallax_front').fadeIn().css('top', 0);
  });
}).fail(function(){
  var msg = $(document.createElement('div')).css('display', 'none').attr('id', 'preload_error').html('Something wrong.<br>Please refresh the page');
  $('#preload').append(msg);
  $("#preload_error").fadeIn(500);
});




/*---------------------------
  Get and append data
 ---------------------------*/
var data, dataGet = true;
$.get( "./data.json", function(json) {
  data = json;

  // append skill table
  var skill = data.skill;
  for(i=0; i<skill.length; i++){
    var e = $('<div class="col-md-5 col-sm-5">\
                <h4 class="uppercase align-right">' + skill[i].title + '</h4>\
                <hr><ul></ul></div>');
    if(i%2==0) e.addClass('col-md-offset-1 col-sm-offset-1');
    for(j=0; j<skill[i].content.length; j++){
      e.find('ul').append('<li>' + skill[i].content[j][0] + '<span class="score" data-score="' + skill[i].content[j][1] + '" data-toggle="tooltip" data-placement="left" title="">  <span class="rank"></span></span></li>');
    }
    $('#skills').children('div').last().append(e);
  }

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
}).fail(function(){
  dataGet = false;
  $('#skills').hide();
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


    if((progress*2.5)<=$(window).height())
      $('.parallax_front').css('top', -progress*1.5);
    else
      $('.parallax_front').css('top', $(window).height()*(-1.5)/2.5);

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
  var start_offset = $(window).height()*2;
  $( window ).on('scroll', function() {
    if(($('#timeline').offset().top-progress+50)<start_offset && flag==0){
      flag=1;
      $.getScript('./js/jquery.timeline.min.js');
      $.getScript('./js/jquery.mCustomScrollbar.js');
      $.getScript('./js/jquery.easing.1.3.js');
      $.getScript('./js/lightbox.js');
      $.getScript('./js/timeline.js');
      $.getScript('./js/image.js');
      $.get('./timeline_extend.html', function(extend){
        $('#timeline').append(extend);
        $('#timeline_extend').click(function(){
          var a=$('#toggle').prop("checked");
          $('#extension').animate({height: 'toggle'}, 'slow');
        });
        if(dataGet == false){
          $('.timelineLoader').remove();
          $('.timelineFlat').remove();
          $('#timeline_extend').remove();
          $('#extension').show().find('.title').hide();
        }
      });
    }

    if(($('#activity').offset().top-progress+50)<start_offset && flag==1){
      flag=2;
      $.get('./activities.html', function(data){
        $('#activity').append(data);
        imgLoader('#activity');
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

function imgLoader(target){
  var total_images = $(target).find('img').length;
  var images_loaded = 0;
  $(target).find('img').each(function() {
      var fakeSrc = $(this).attr('src');
      $("<img/>").attr("src", fakeSrc).load(function() {
          images_loaded++;
          if (images_loaded >= total_images) {
            $(target).find('.loader').delay(1000).fadeOut();
            $(target).find('.loader').prev().delay(1000).fadeIn();
          }
      });
  });
}
