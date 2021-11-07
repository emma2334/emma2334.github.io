;(function () {
  // Smooth scroll
  $(document).on('click', 'a[href^="#"]', e => {
    e.preventDefault()
    $('html, body').animate(
      { scrollTop: $($.attr(e.currentTarget, 'href')).offset().top + 1 },
      500
    )
  })

  // Manage animation of cover section and navbar
  new IntersectionObserver(
    entries => {
      const { isIntersecting, intersectionRatio } = entries[0]
      $('#home').toggleClass('active', isIntersecting)
      $('nav').toggleClass('active', intersectionRatio < 0.7)
    },
    { threshold: [0, 0.7] }
  ).observe($('#home')[0])

  // Check if sections are visible
  const observe = {}
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const { target, intersectionRatio, isIntersecting } = entry
        observe[$(target).attr('id')] = intersectionRatio > 0.3
        $(target).toggleClass('active', isIntersecting)
      })
      const highlighted = Object.keys(observe).find(
        key => observe[key] === true
      )
      if (highlighted) {
        $('nav a').removeClass('active')
        $('[href=#' + highlighted + ']').addClass('active')
      }
    },
    { rootMargin: '0px 0px -5% 0px', threshold: [0, 0.3] }
  )
  $('.content > section').each((i, dom) => {
    sectionObserver.observe(dom)
  })

  // Reveal when cover image is ready
  const img = document.createElement('img')
  img.src = './static/img/cover.jpg'
  img.onload = function () {
    $('#preload').fadeOut('slow')
    $('#home').addClass('active')
  }
})()
