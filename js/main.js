(function() {
  $('.parallax').scrolly({bgParallax: true});
  $('#home header').addClass('active');
  var lineMaker = new LineMaker({
    parent: {element: '#home', position: 'prepend'},
    lines: [
      {top: '15%', left: 0, width: '100%', height: 2, color: '#ddd', hidden: true},
      {top: '85%', left: 0, width: '100%', height: 2, color: '#ddd', hidden: true},
      {top: 0, left: '90%', width: 2, height: '100%', color: '#ddd', hidden: true},
      {top: 0, left: '10%', width: 2, height: '100%', color: '#ddd', hidden: true},
      {top: '15%', left: 0, width: '100%', height: 2, color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }},
      {top: '85%', left: 0, width: '100%', height: 2, color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 100, direction: 'RightLeft' }},
      {top: 0, left: '90%', width: 2, height: '100%', color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 200, direction: 'BottomTop' }},
      {top: 0, left: '10%', width: 2, height: '100%', color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 300, direction: 'TopBottom' }}
    ]
  });

  setTimeout(function() {
    lineMaker.animateLineIn(4, {
      complete: function() { lineMaker.showLine(0); }
    });
    lineMaker.animateLineIn(5, {
      complete: function() { lineMaker.showLine(1); }
    });
    lineMaker.animateLineIn(6, {
      complete: function() { lineMaker.showLine(2); }
    });
    lineMaker.animateLineIn(7, {
      complete: function() { lineMaker.showLine(3); }
    });
  }, 100);

  setTimeout(function() {
    lineMaker.animateLineOut(4);
    lineMaker.animateLineOut(5);
    lineMaker.animateLineOut(6);
    lineMaker.animateLineOut(7);
  }, 1700);

  setTimeout(function() {
    lineMaker.createLine({top: '50vh', left: '21vw', width: '60vw', height: 16, color: '#E91E63', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 300, direction: 'LeftRight' }});

    lineMaker.animateLineIn(8);
  }, 1700);

  $('#scroll-down-notice').delay(2600).fadeIn(1000);
})();