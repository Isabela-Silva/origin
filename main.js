const nav = document.querySelector(".container");
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

/* mudar o header da pagina quando der scroll*/

const header = document.querySelector('#header')
const altHeader = header.offsetHeight

window.addEventListener('scroll', () => {
  if (window.scrollY >= altHeader) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// carroussel swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
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
  #contact .texts, #contact .links
  `,
  { interval: 100}
)
