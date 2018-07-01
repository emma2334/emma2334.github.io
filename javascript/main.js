(function() {
  var isPhone = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );

  if(isPhone) $('body').addClass('phone');
  // Scroll effect
  // detect if IE : from http://stackoverflow.com/a/16657946
  var ie = /*@cc_on!@*/false || !!document.documentMode;

  // disable/enable scroll (mousewheel and keys)
  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
    e.preventDefault();
    e.returnValue = false;
  }

  function disable_scroll() {
    // window.onmousewheel = document.onmousewheel = function wheel(e) {
    //   // for IE
    //   //if( ie ) {
    //     //preventDefault(e);
    //   //}
    // };

    document.onkeydown = function(e) {
      if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1){
        preventDefault(e);
      }
    };

    document.body.ontouchmove = function(e) {
      if(isPhone) preventDefault(e);
    };
  }

  function enable_scroll() {
    window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;
  }

  var docElem = window.document.documentElement,
    scrollVal,
    isRevealed,
    noscroll,
    isAnimating,
    container = document.body,
    trigger = container.querySelector( '#scroll-down-notice' );

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  function scrollPage() {
    scrollVal = scrollY();

    if( noscroll && !ie ) {
      if( scrollVal < 0 ) return false;
      // keep it that way
      window.scrollTo( 0, 0 );
    }

    if( $('body').hasClass( 'notrans' ) ) {
      $('body').removeClass('notrans' );
      return false;
    }

    if( isAnimating ) {
      return false;
    }

    if( scrollVal <= 0 && isRevealed ) {
      toggle(0);
    }
    else if( scrollVal > 0 && !isRevealed && !isPhone ){
      toggle(1);
    }
  }

  function toggle( reveal ) {
    isAnimating = true;

    if( reveal ) {
      $('body').addClass( 'modify' );
    }
    else {
      noscroll = true;
      disable_scroll();
      $('body').removeClass( 'modify' );
      $('#home').removeClass('active');
      lineMaker.hideLines();
      setTimeout(homeAnimation(), 1200);
    }

    // simulating the end of the transition:
    setTimeout( function() {
      isRevealed = !isRevealed;
      isAnimating = false;
      if( reveal ) {
        noscroll = false;
        enable_scroll();
      }
    }, 1200 );
  }

  // refreshing the page...
  var pageScroll = scrollY();
  noscroll = pageScroll === 0;

  disable_scroll();

  if( pageScroll ) {
    isRevealed = true;
    $('body').addClass( 'notrans' );
    $('body').addClass( 'modify' );
  }

  window.addEventListener( 'scroll', scrollPage, { passive: false } );
  trigger.addEventListener( 'click', function() { toggle( 'reveal' ); } );

  homeAnimation();

  // Smooth scroll
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top + 1
    }, 500);
  });
})();

(function(){
  window.sr = ScrollReveal({ reset: true });

  sr.reveal($('#about .info'), {
    origin: 'right',
    scale: 1,
    distance: $('.container').css('margin-right'),
    duration: 2000
  });

  // sr.reveal($('#about .row')[1], {
  //   origin: 'right',
  //   scale: 1,
  //   distance: $('.container').css('margin-right'),
  //   duration: 2000
  // });
})();

var lineMaker = new LineMaker({
  parent: {element: '#home', position: 'prepend'},
  lines: [
    {top: '15%', left: 0, width: '100%', height: 2, color: '#FFF', hidden: true},
    {top: '85%', left: 0, width: '100%', height: 2, color: '#FFF', hidden: true},
    {top: 0, left: '90%', width: 2, height: '100%', color: '#FFF', hidden: true},
    {top: 0, left: '10%', width: 2, height: '100%', color: '#FFF', hidden: true},
    {top: '15%', left: 0, width: '100%', height: 2, color: '#888', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }},
    {top: '85%', left: 0, width: '100%', height: 2, color: '#888', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 100, direction: 'RightLeft' }},
    {top: 0, left: '90%', width: 2, height: '100%', color: '#888', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 200, direction: 'BottomTop' }},
    {top: 0, left: '10%', width: 2, height: '100%', color: '#888', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 300, direction: 'TopBottom' }},
    {top: '50vh', left: '21vw', width: '60vw', height: 16, color: '#508bf1', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 300, direction: 'LeftRight' }}
  ]
});

function homeAnimation(){
  // setTimeout(function() { lineMaker.hideLines();}, 0);
  setTimeout(function() {
    $('#home').addClass('active');

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
    lineMaker.animateLineIn(8);
    $('#scroll-down-notice').delay(1000).fadeIn();
  }, 1700);

}