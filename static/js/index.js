(function() {

  // Smooth scroll
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top + 1
    }, 500)
  });

  // intersection observer
  new IntersectionObserver(function (entries) {
    var intersectionRatio = entries[0].intersectionRatio
    $('#home').toggleClass('active', intersectionRatio >= 0.2)
    $('nav').toggleClass('active', intersectionRatio != 1)
  }, {
    threshold: [...new Array(11)].map((e, i) => i * 0.1),
  }).observe($('#home')[0])

  var observe = new Map()
  var sectionObserve = new IntersectionObserver(function (entries, e) {
    entries.forEach(function (entry) {
      var target = entry.target
      var intersectionRatio = entry.intersectionRatio
      var isIntersecting = entry.isIntersecting

      observe.set(target, isIntersecting)

      if(intersectionRatio >= 0.2) $(target).addClass('active')
      if(intersectionRatio < 0.1 || !isIntersecting) $(target).removeClass('active')
    })
    var sections = $('.content > section').toArray().map(function (e) { return $(e).attr('id')})
    var highlighted = Array.from(observe.values()).indexOf(true)
    if (highlighted > -1) {
        $('nav a').removeClass('active')
        $('[href=#' + sections[highlighted] + ']').addClass('active')
    }
  }, {
    threshold: [...new Array(11)].map((e, i) => i * 0.1),
  })
  $('.content > section').each((i, dom) => {
    sectionObserve.observe(dom)
    observe.set(dom, false)
  })

  $(window).on('load', function() {
    setTimeout(function() {
      $('#preload').fadeOut('slow')
      $('#home').addClass('active')
    }, 100);
  });
})();