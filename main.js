const nav = document.querySelector(".container")
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}
const links = document.querySelectorAll('.links a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// mudar o header da pagina quando der scroll
const header = document.querySelector('#header')
const altHeader = header.offsetHeight

function changeHeaderWhenScroll() {

  if (window.scrollY >= altHeader) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}



// carroussel swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scroll reveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .texts,
  #about .image, #about .texts,
  #services header, #services .card,
  #testimonials header, #testimonials .swiper-wrapper,
  #contact .texts, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100}
)
// button to return to top 
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if(window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {

  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for( const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd) {
      document.querySelector('nav ul li a[href*=' + sectionId +']')
      .classList.add('active')
    } else {
      document.querySelector('nav ul li a[href*=' + sectionId +']')
      .classList.remove('active')
    }
  }
}













// when scroll
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

