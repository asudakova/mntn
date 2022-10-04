// for page navigation by clicking on the right side navbar
const anchors =  document.querySelectorAll('.nav__link, .home__link');
anchors.forEach(anchor => {
   anchor.addEventListener('click', function(e) {
      anchors.forEach(anchor => {
         anchor.classList.remove('active');
      });
      e.preventDefault();
      const block = this.getAttribute('href');
      console.log(block);
      const target = document.querySelector(block).offsetTop - 100;
      console.log(target);
      this.classList.add('active');
      
      document.querySelector(block).scrollIntoView({
         block: 'start',
         behavior: 'smooth'
      });
   })
});

// to update 'active' class on the right side navbar while the page is scrolling
const blocks = document.querySelectorAll('#start, #first, #second, #third');
const windowHeight = window.innerHeight;
window.addEventListener('scroll', function(e){
   blocks.forEach((block, index) => {
      const blockX = block.getBoundingClientRect().top;
      console.log(`Block ${index} top ${blockX}`);
      if (blockX < windowHeight / 2 ) {
         anchors.forEach(anchor => {
            anchor.classList.remove('active');
         });
         anchors[index].classList.add("active");         
         console.log(`BLOCK ${index} DETECTED`);
      }
   });
});
