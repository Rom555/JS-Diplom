export const slider = ({
  sliderWrapperClass,
  slidesClass,
  slideActiveClass = 'slider-slide-active-flex',
  btnPrevClass,
  btnNextClass,
}) => {
  if (!sliderWrapperClass || !slidesClass) return;

  const sliderBlock = document.querySelector('.' + sliderWrapperClass);
  const slides = sliderBlock.querySelectorAll('.' + slidesClass);

  if (!sliderBlock || !slides) return;

  let currentSlide = 0;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const init = () => {
    slides.forEach((slide) => {
      slide.classList.add('slider-slide');
    });

    slides[0].classList.add(slideActiveClass);
  };

  sliderBlock.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(!e.target.closest(`.${btnNextClass}`) && !e.target.closest(`.${btnPrevClass}`));

    if (!e.target.closest(`.${btnNextClass}`) && !e.target.closest(`.${btnPrevClass}`)) {
      return;
    }

    prevSlide(slides, currentSlide, slideActiveClass);

    if (e.target.closest(`.${btnNextClass}`)) {
      currentSlide++;
    } else if (e.target.closest(`.${btnPrevClass}`)) {
      currentSlide--;
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, slideActiveClass);
  });

  init();
};
