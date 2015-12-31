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
  Get search query
 ---------------------------*/
var query = {};
(function(){
  var pair = window.location.search.substring(1).split("&");
  for(i=0; i<pair.length; i++){
    pair[i] = pair[i].split('=');
    query[pair[i][0]] = pair[i][1];
  }
})();

// get language
switch(query.lang){
  case 'en':
    lang = query.lang;
    break;
  default:
    lang = 'ch';
}



/*---------------------------
  Render data
 ---------------------------*/
$('script[id*=template]').each(function(){
  $(this).html($(this).html().replace(/\[lang\]/g, '.'+lang));
  var template = $(this).html();
  Mustache.parse(template);
  var rendered = Mustache.render(template, data);
  $(this).before(rendered);
});



/*---------------------------
  Skill table
 ---------------------------*/
$('.score').each(function(){
  var a=['No idea', 'Learned', 'Average', 'Good', 'Above average', 'Excellent'];
  var score = $(this).attr('data-score')
  $(this).attr('title', a[score]);
  $(this).find('.rank').html(a[score]);
});
$('[data-toggle="tooltip"]').tooltip();



/*---------------------------
  Transition
 ---------------------------*/
(function(){
  $( window ).on('scroll', function() {
    var e = scrollY/$(window).height();

    var a=$('#scroll-down-notice'), b=$('#slogan'), c=0.2-e;
    if(c>0){
      a.css("opacity", 4*c);
      b.css("opacity", 3*c);
    }else{
      a.css("opacity", 0);
      b.css("opacity", 0);
    }


    if((scrollY*2.5)<=$(window).height())
      $('.parallax_front').css('top', -scrollY*1.5);
    else
      $('.parallax_front').css('top', $(window).height()*(-1.5)/2.5);

    if(scrollY>0){
      $('#quote').removeClass("transparent");
      $('#about').removeClass("transparent");
    }

    if(($('#skills').offset().top-scrollY)<$(window).height()/2.5){
      for(var i=0; i<$('.score').length; i++){
        var level = $('.score').eq(i).attr('data-score');
        $('.score').eq(i).addClass('score-'+level);
      }
    }
  });

})();



/*---------------------------
  Link alert
 ---------------------------*/
function github_alert(){
  alert("It's a private repository.");
}
function link_alert(){
  alert("The link is empty.");
}



/*---------------------------
  Get timeline js
 ---------------------------*/
$(function(){
  var flag = 0;
  var start_offset = $(window).height();
  $( window ).on('scroll', function() {
    if(($('#timeline').offset().top-scrollY)<$(window).height() && flag==0){
      flag=1;
      $.getScript('./js/jquery.timeline.min.js');
      $.getScript('./js/jquery.mCustomScrollbar.js');
      $.getScript('./js/jquery.easing.1.3.js');
      $.getScript('./js/lightbox.js');
      $.getScript('./js/timeline.js');
      $.getScript('./js/image.js');
    }
  });
});



/*---------------------------
  Lazy load
 ---------------------------*/
$("img.lazy").lazyload({
    effect : "fadeIn"
});
$('.timelineFlat').click(function(){
  setTimeout(function() {$(".timelineFlat img.lazy").lazyload();}, 500);
});

function imgLoader(target){
  var total_images = $(target).find('img').length;
  var images_loaded = 0;
  target.find('img').each(function() {
    $(this).attr('src', $(this).attr('data-original')).removeAttr('data-original');
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

 $('#timeline_extend').click(function(){
    imgLoader($('#extension'));
    var a=$('#toggle').prop("checked");
    $('#extension').animate({height: 'toggle'}, 'slow');
 });

 $(window).on('scroll', function(){
  var target = $('section .container').has('.loader');
  var e = '#extension';
  target.not(target.has(e)).each(function(){
    if(($(this).offset().top-scrollY)<$(window).height()*2){
      imgLoader($(this));
    }
  });
 });
