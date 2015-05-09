(function(){
  var $window,fullPage;
  $window=$(window);
  fullPage=$(".full-page");
  fullPage.height($window.height());
  $(window).on("resize",function(e){$('.parallax').css('width', $(window).width());return fullPage.height($window.height());});
}).call(this);

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

$(document).ready(function(){
  var month={01: "Jan", 02: "Feb", 03: "Mar", 04: "Apr", 05: "May", 06: "Jun", 07: "Jul", 08: "Aug", 09: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"};
  for(var i=0; i<$('.item').length; i++){
    var date=$('.item').eq(i).attr('data-id').split('/');
    $('.item').eq(i).find("div.post_date").html(date[0]+"<span>"+month[parseInt(date[1])]+"</span>");
    var name="<h2>"+$('.item').eq(i).attr('data-description')+"</h2>";
    $('.item').eq(i).children("span").before(name);
  }
});

$(function(){
  $('.image_rollover_bottom').click(function(){
    $('body').css('overflow', 'hidden');
  });
});

$(function(){
  $('#timeline_extend').click(function(){
    var a=$('#toggle').prop("checked");
    $('#extension').animate({height: 'toggle'}, 'slow');

    if(a==0){
      $('#timeline_extend').find('span').html('hide all');
      $('#timeline_extend').find('i').attr('class', 'fa fa-chevron-up');
    }else{
      $('#timeline_extend').find('span').html('view all at once');
      $('#timeline_extend').find('i').attr('class', 'fa fa-chevron-down');
    }
  });
});
