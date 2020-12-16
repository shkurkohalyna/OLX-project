import Siema from 'siema';

function onInitCallback() {
    console.log('Siema initialised bro :)');
  }
  
  function onChangeCallback() {
    console.log(`The index of current slide is: ${this.currentSlide}`);
  }
  
  const mySiema = new Siema({
    selector: '.slider',
    duration: 400,
    easing: 'ease-out',
    perPage: {
        768: 2, // 2 items for viewport wider than 768px
        1280: 4 // 4 items for viewport wider than 1280px
    },
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: onInitCallback,
    onChange: onChangeCallback,
  });
  
//   const prev = document.querySelector('.prev');
//   const next = document.querySelector('.next');
  
//   prev.addEventListener('click', () => mySiema.prev());
//   next.addEventListener('click', () => mySiema.next());