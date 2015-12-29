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
  Get and append data
 ---------------------------*/
var data, dataGet = true;
$.get( "./data.json", function(json) {
  data = json;

  // about me
  $('#about .info div').html(data.info[lang]);

  // skill table
  var skill = data.skill;
  for(i=0; i<skill.length; i++){
    var a=['No idea', 'Learned', 'Average', 'Good', 'Above average', 'Excellent'];
    var e = $('<div class="col-md-5 col-sm-5">\
                <h4 class="uppercase align-right">' + skill[i].title + '</h4>\
                <hr><ul></ul></div>');
    if(i%2==0) e.addClass('col-md-offset-1 col-sm-offset-1');
    for(j=0; j<skill[i].content.length; j++){
      var b = skill[i].content[j];
      e.find('ul').append('<li>' + b[0] + '<span class="score" data-score="' + b[1] + '" data-toggle="tooltip" data-placement="left" title="' + a[b[1]] + '">  <span class="rank">' + a[b[1]] + '</span></span></li>');
    }
    $('#skills').children('div').last().append(e);
  }

  // more about me
  for(i=0; i<data.more.length; i++){
    $('<div class="col-md-3 col-sm-6" data-toggle="tooltip" data-placement="bottom" title="' + data.more[i].title + '">\
          <i class="fa ' + data.more[i].icon + '"></i>\
          <div class="substance">' + data.more[i].content[lang] + '</div>\
        </div>').appendTo('#more .container');
  }

  // timeline
  for(i=0; i<data.timeline.length; i++){
    var a = data.timeline[i];
    $('<div class="event">\
        <div class="item" data-id="' + a.date + '" data-description="' + a.title + '">\
          <a class="image_rollover_bottom con_borderImage" data-description="ZOOM IN" href="' + a.img + '" rel="lightbox[timeline]">\
          <img class="lazy" data-original="' + a.img_t + '" alt="" width="410px" height="160px"/>\
          </a>\
          <div class="post_date"></div>\
          <span>' + a.period + '<br>' + a.info[lang] + '</span>\
        </div>\
      </div>').appendTo('.timelineFlat');
    if(a.text[lang]!=''){
      $('[data-description="' + a.title + '"][data-id="' + a.date + '"]').append('<div class="read_more" data-id="' + a.date + '">Read more</div>');
      $('<div class="item_open" data-id="' + a.date + '">\
          <div class="item_open_content">\
            <div class="timeline_open_content">\
              <header>' + a.period + '</header>\
              <span>' + a.text[lang] + '</span>\
            </div>\
          </div>\
        </div>').appendTo($('[data-description="' + a.title + '"][data-id="' + a.date + '"]').parent('.event'));
    }
  }

  // timeline extension
  for(i=0; i<data.timeline_all.length; i++){
    var a = data.timeline_all[i];
    $('<figure class="effect-apollo">\
        <img data-original="' + a.img + '"/>\
        <figcaption>\
          <h2>' + a.title + '</h2>\
          <p>' + a.intro + '</p>\
        </figcaption>\
      </figure>').appendTo('#extension .grid');
  }

  // activities
  for(i=0; i<data.activity.length; i++){
    var a = data.activity[i];
    if(a.title[lang]!=""){
      $('<figure class="effect-apollo">\
          <img data-original="' + a.img + '"/>\
          <figcaption>\
            <h2>' + a.title[lang] + '</h2>\
            <p>' + a.info[lang] + '</p>\
          </figcaption>\
        </figure>').appendTo('#activity .grid');
    }
  }

  // works
  for(i=0; i<Object.keys(data.work).length; i++){
    var a = data.work[Object.keys(data.work)[i]];
    $('<figure class="effect-zoe">\
        <img data-original="' + a.img + '"/>\
        <figcaption>\
          <div class="mask"></div>\
          <h2>' + a.title[lang] + '</h2>\
          <p class="icon-links">\
            <a title="URL" href="' + a.url.link + '" target="_blank"><i class="fa fa-external-link"></i></a>\
            <a title="GitHub" href="' + a.url.github + '" target="_blank"><i class="fa fa-github"></i></a>\
          </p>\
          <p class="description">' + a.intro[lang] + '<br><br><a data-toggle="modal" data-target="#' + Object.keys(data.work)[i] + '">【 more 】</a></p>\
        </figcaption>\
      </figure>\
      <div class="modal fade bs-example-modal-lg" id="' + Object.keys(data.work)[i] + '" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\
        <div class="modal-dialog modal-lg">\
          <div class="modal-content">\
            <div class="modal-header">\
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>\
              <h4 class="modal-title" id="myLargeModalLabel">' + a.more.title[lang] + '</h4>\
              <a href="' + a.url.link + '" target="_blank"><i class="fa fa-external-link"></i></a>\
            </div>\
            <div class="modal-body">' + a.more.content[lang] + '</div>\
          </div>\
        </div>\
      </div>').appendTo('#works .grid');
  }

  $('[data-toggle="tooltip"]').tooltip();

  $("img.lazy").lazyload({
      effect : "fadeIn"
  });
  $('.timelineFlat').click(function(){
    setTimeout(function() {$(".timelineFlat img.lazy").lazyload();}, 500);
  });

}).fail(function(){
  dataGet = false;
  $('#skills').hide();
  console.log('false');
});



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



/*---------------------------
  Events
 ---------------------------*/
 $('#timeline_extend').click(function(){
    imgLoader($('#extension'));
    var a=$('#toggle').prop("checked");
    $('#extension').animate({height: 'toggle'}, 'slow');
 });

 $(window).on('scroll', function(){
  var target = $('section .container').has('.loader');
  var e = '#extension';
  target.not(target.has(e)).each(function(){
    if(($(this).offset().top-scrollY)<$(window).height()){
      imgLoader($(this));
    }
  });
 });
