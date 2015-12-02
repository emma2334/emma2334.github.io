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
    var a=['No idea', 'Learned', 'Average', 'Good', 'Over average', 'Excellent'];
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

  // works
  for(i=0; i<Object.keys(data.work).length; i++){
    var a = data.work[Object.keys(data.work)[i]];
    $('<figure class="effect-zoe">\
        <img src="' + a.img + '"/>\
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

  // more
  for(i=0; i<data.more.length; i++){
    $('<div class="col-md-3 col-sm-6" data-toggle="tooltip" data-placement="bottom" title="' + data.more[i].title + '">\
          <i class="fa ' + data.more[i].icon + '"></i>\
          <div class="substance">' + data.more[i].content[lang] + '</div>\
        </div>').appendTo('#more .container');
  }

  $('[data-toggle="tooltip"]').tooltip();
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
  // $('#works .container').append(data);
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
