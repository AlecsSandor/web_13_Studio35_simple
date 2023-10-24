/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
   
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/

var prevScrollpos = window.pageYOffset; 
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .head-title__container, .imagegrid__container, .imagegrid__about__container, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

/*==================== SCROLL TRiGGER ANIMATION ====================*/

  const observer1 = new IntersectionObserver(entries => { 
    entries.forEach(entry => {
      const square = entry.target.querySelector('.work__subtitle');
      
      if (entry.isIntersecting) {
        square.classList.add('work__subtitle-animation');
        square.classList.remove('work__subtitle-opacity');
        return; // if we added the class, exit the function  
      } else {
        square.classList.add('work__subtitle-opacity');
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('work__subtitle-animation'); 
    });
  });
  
  observer1.observe(document.querySelector('.work__container'));

  const observer2 = new IntersectionObserver(entries => { 
    entries.forEach(entry => {
      const square = entry.target.querySelector('.clients__subtitle');
      
      if (entry.isIntersecting) {
        square.classList.add('work__subtitle-animation');
        square.classList.remove('work__subtitle-opacity');
        return; // if we added the class, exit the function  
      } else {
        square.classList.add('work__subtitle-opacity');
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('work__subtitle-animation'); 
    });
  });
  
  observer2.observe(document.querySelector('.clients__container'));

  const observer3 = new IntersectionObserver(entries => { 
    entries.forEach(entry => {
      const square = entry.target.querySelector('.h1__sub');
      
      if (entry.isIntersecting) {
        square.classList.add('work__subtitle-animation');
        square.classList.remove('work__subtitle-opacity');
        return; // if we added the class, exit the function  
      } else {
        square.classList.add('work__subtitle-opacity');
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('work__subtitle-animation'); 
    });
  });
  
  observer3.observe(document.querySelector('.team__container'));

/*==================== MOMENTUM SCROLL ====================*/ 

