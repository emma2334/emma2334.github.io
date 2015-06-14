(function(){
  var $window,fullPage;
  $window=$(window);
  fullPage=$(".full-page");
  fullPage.height($window.height());
  $(window).on("resize",function(e){return fullPage.height($window.height());});
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

function github_alert(){
      alert("It's a private repository.");
    }
function link_alert(){
  alert("The link is empty.");
}

$(function() {
  $("img.lazy").lazyload({
    // effect : "fadeIn"
  });
});
