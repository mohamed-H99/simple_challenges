// console.log(('Working').toUpperCase());
const navList = document.querySelector('#main-nav .nav-list');
const openNavBtn = document.querySelector('#main-nav #openNav');
const closeNavBtn = document.querySelector('#main-nav #closeNav');
const openNav = () => {
  navList.style.cssText += 'height: 330px; opacity: 1; pointer-events: auto;';
  openNavBtn.classList.remove('active');
  closeNavBtn.classList.add('active');
}
const closeNav = () => {
  navList.style.cssText += 'height: 0; opacity: 0; pointer-events: none;';
  openNavBtn.classList.add('active');
  closeNavBtn.classList.remove('active');
}
// swiper testimonials
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})
// swiper brands
var mySwiper = new Swiper('.swiper-container-brands', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  }
})

// faq thing
const faq = document.querySelector('#faq');
const faqHeaders = document.querySelectorAll('#faq ul li h3');
faqHeaders.forEach(header => {
  header.classList.add('box-opener');
})
const faqBoxes = document.querySelectorAll('#faq ul li .content');

faq.addEventListener('click', e => {
  if(e.target.classList.contains('box-opener')){
    faqBoxes.forEach(box => {
      box.style.height = '0';
    })
    if(!e.target.classList.contains('pressed')){
      e.target.parentElement.querySelector('.content').style.height = '100%';
      faqHeaders.forEach(h => {
        h.classList.remove('pressed');
      })
      e.target.classList.add('pressed');
    } else{
      e.target.parentElement.querySelector('.content').style.height = '0';
      e.target.classList.remove('pressed');
    }
    
  }
})

// console.log(faqBoxes);