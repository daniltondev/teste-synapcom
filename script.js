/*USER ACTIONS DROP*/
$('.user-enter').hover(
  function () {
    $('.drop-account').css('display', 'unset')
  },
  function () {
    $('.drop-account').css('display', 'none')
  }
)

$('.user-bag').hover(
  function () {
    $('.drop-bag').css('display', 'unset')
  },
  function () {
    $('.drop-bag').css('display', 'none')
  }
)
/* HOVER COMPRA RAPIDA DOS PRODUTOS*/

$('.smarthint-news-products').hover(
  function () {
    $(this).children('.hover-position').css('opacity', '1')
  },
  function () {
    $(this).children('.hover-position').css('opacity', '0')
  }
)

$('.smarthint-bestsellers-products').hover(
  function () {
    $(this).children('.hover-position').css('opacity', '1')
  },
  function () {
    $(this).children('.hover-position').css('opacity', '0')
  }
)

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
  autoplay: true,
  autoplaySpeed: 2000
})

$('.smarthint-bestsellers-content').slick({
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
})

console.log('tá aqui')

//MENU

$('.news').hover(
  function () {
    $('#novidades').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#novidades').css('display', 'none')
  }
)

$('.girls').hover(
  function () {
    $('#meninas').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#meninas').css('display', 'none')
  }
)

$('.boys').hover(
  function () {
    $('#meninos').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#meninos').css('display', 'none')
  }
)

$('.babys').hover(
  function () {
    $('#bebes').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#bebes').css('display', 'none')
  }
)

$('.brands').hover(
  function () {
    $('#marcas').css({ display: 'unset', 'margin-top': '45px' })
  },
  function () {
    $('#marcas').css('display', 'none')
  }
)

$('.promotion').hover(
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
