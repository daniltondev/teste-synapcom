/* SLICK FUNCTIONS */

$('.banner-carrossel').slick({
  dots: true,
  infinite: true,
  arrows: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000
})

$('.smarthint-news-content').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000
})

$('.smarthint-bestsellers-content').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000
})

console.log('tá aqui')

//MENU

$('.arrow-novidades').hover(
  function () {
    $('#novidades').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#novidades').css('display', 'none')
  }
)

$('.arrow-meninas').hover(
  function () {
    $('#meninas').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#meninas').css('display', 'none')
  }
)

$('.arrow-meninos').hover(
  function () {
    $('#meninos').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#meninos').css('display', 'none')
  }
)

$('.arrow-bebes').hover(
  function () {
    $('#bebes').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#bebes').css('display', 'none')
  }
)

$('.arrow-marcas').hover(
  function () {
    $('#marcas').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#marcas').css('display', 'none')
  }
)

$('.arrow-promocoes').hover(
  function () {
    $('#promocoes').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#promocoes').css('display', 'none')
  }
)

//SWEET ALERT

let localStorageContent = localStorage.getItem('lgpd-confirm')
if (!localStorageContent) {
  $('.lgpd-sweet-alert').css('display', 'unset')

  let lgpdArea = $('.lgpd-sweet-alert')
  let lgpdBtn = $('.lgpd-item-button')
  lgpdBtn.on('click', function () {
    lgpdArea.remove()
    localStorage.setItem('lgpd-confirm', 'OK')
  })
}
