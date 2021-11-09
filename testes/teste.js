class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu) /*botao menu*/
    this.navList =
      document.querySelector(navList) /*Lista da nav a que tá escondida*/
    this.navLinks = document.querySelectorAll(navLinks) /*links do menu */
    this.activeClass = 'active'
    this.handleClick =
      this.handleClick.bind(this) /*referencia a classe quando chama a f() */
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.7s ease forwards ${
            index / 7 + 0.3
          }s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
    this.animateLinks()
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick)
  }
  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavBar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li'
)

mobileNavBar.init()
