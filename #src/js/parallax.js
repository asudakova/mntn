//parallax effect for home section
document.body.onload = function() { 
   window.addEventListener('scroll', function(e){
      const layers = document.querySelectorAll('.parallax, .home__text');
      const top = this.scrollY;
      for (let i = 0; i < layers.length; i++) {
         let speed = layers[i].getAttribute('data-speed');
         let yScroll = - (top * speed / 100);
         layers[i].setAttribute('style', `transform: translateY(${yScroll}px)`);
      }
   });
}


