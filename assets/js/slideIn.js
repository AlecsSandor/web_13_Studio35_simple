
  const observer4 = new IntersectionObserver(entries => { 
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

  observer4.observe(document.querySelector('.team__container'));

  const observer5 = new IntersectionObserver(entries => { 
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

  observer5.observe(document.querySelector('.mission__container'));