const carousel = (
	triggersSelector,
	slideSelector,
	sliderSelector,
	rightArrowSelector,
	leftArrowSelector,
	overlaySelector
  ) => {
	const triggers = document.querySelectorAll(triggersSelector),
	  slider = document.querySelector(sliderSelector),
	  slide = document.querySelector(slideSelector),
	  rightArrow = document.querySelector(rightArrowSelector),
	  leftArrow = document.querySelector(leftArrowSelector),
	  overlay = document.querySelector(overlaySelector),
	  body = document.querySelector('body');

	let currentIndex = 0;

	const openSliderAtIndex = (index) => {
	  currentIndex = index;
	  const href = triggers[currentIndex].getAttribute('data-src');
	  slide.setAttribute('src', href);
	  slider.style.display = 'block';
	  body.style.overflow = 'hidden';
	};

	const closeSlider = () => {
	  slider.style.display = 'none';
	  body.style.overflow = 'auto';
	};

	const showNext = () => {
	  if (currentIndex === triggers.length - 1) {
		currentIndex = 0;
	  } else {
		currentIndex++;
	  }
	  const href = triggers[currentIndex].getAttribute('data-src');
	  slide.setAttribute('src', href);
	};

	const showPrev = () => {
	  if (currentIndex === 0) {
		currentIndex = triggers.length - 1;
	  } else {
		currentIndex--;
	  }
	  const href = triggers[currentIndex].getAttribute('data-src');
	  slide.setAttribute('src', href);
	};

	triggers.forEach((trigger, index) => {
	  trigger.addEventListener('click', () => {
		openSliderAtIndex(index);
	  });
	});

	overlay.addEventListener('click', closeSlider);

	rightArrow.addEventListener('click', showNext);
	leftArrow.addEventListener('click', showPrev);

	document.addEventListener('keydown', (e) => {
	  if (slider.style.display === 'block') {
		if (e.key === 'ArrowRight') showNext();
		if (e.key === 'ArrowLeft') showPrev();
		if (e.key === 'Escape') closeSlider();
	  }
	});
  };

  export default carousel;
