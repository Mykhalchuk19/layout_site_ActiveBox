const slider = document.querySelector('.clients__slider');
const slides = document.querySelectorAll('li.clients__slide');

const indicators = document.createElement('ul');

function showSlider() {
  const activeSlide = document.querySelector('.clients__slide__active');
  const responseBlock = activeSlide.querySelector('.clients__response');
  responseBlock.removeChild(indicators);
  for (let j = 0; j < slides.length; j += 1) {
    slides[j].classList.remove('clients__slide__active');
    buttons[j].classList.remove('active__button');
  }
  for (let i = 0; i < slides.length; i += 1) {
    if (this.getAttribute('data-number') === slides[i].getAttribute('data-index')) {
      slides[i].classList.add('clients__slide__active');
      slides[i].appendChild(indicators);
      this.classList.add('active__button');
      console.log(this.getAttribute('data-number'));
      console.log(slides[i].getAttribute('data-index'));
    }
  }
}

for (let i = 1; i <= slides.length; i += 1) {
  const dot = document.createElement('li');
  const button = document.createElement('button');
  button.classList.add('button');
  button.setAttribute('data-number', i);
  button.setAttribute('onClick', 'showSlider()');
  dot.appendChild(button);
  dot.classList.add('dot');
  indicators.appendChild(dot);
}
const buttons = indicators.querySelectorAll('button.button');
slides[0].classList.add('clients__slide__active');

showDots();

function showDots() {
  const activeSlide = document.querySelector('.clients__slide__active');
  const responseBlock = activeSlide.querySelector('.clients__response');
  indicators.classList.add('slider__dots');
  responseBlock.appendChild(indicators);

  buttons[0].classList.add('active__button');
}
