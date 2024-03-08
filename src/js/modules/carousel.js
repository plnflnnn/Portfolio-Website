const carousel = ( triggersSelector, slideSelector, sliderSelector, rightArrowSelector, leftArrowSelector, overlaySelector) => {
	const triggers = document.querySelectorAll(triggersSelector),
		slider = document.querySelector(sliderSelector),
		slide = document.querySelector(slideSelector),
		rightArrow = document.querySelector(rightArrowSelector),
		leftArrow = document.querySelector(leftArrowSelector),
		overlay = document.querySelector(overlaySelector),
		body = document.querySelector('body');

	const closeSlider = () => {
		slider.style.display = 'none';
		body.style.overflow = 'auto';
	};

	overlay.addEventListener('click', () => {
		closeSlider();
	});

	const openSlider = () => {
		triggers.forEach((trigger, i) => {
			trigger.addEventListener('click', () => {
				let href = trigger.getAttribute('data-src');
				slider.style.display = 'block';
				body.style.overflow = 'hidden';
				slide.setAttribute('src', href);

				const nextSlider = () => {
					if (i == triggers.length - 1) {
						i = 0;
					} else {
						i++;
					}
	
					let href = triggers[i].getAttribute('data-src');
					slide.setAttribute('src', href);
				};

				const previousSlide = () => {
					if (i == 0) {
						i = triggers.length - 1;
					} else {
						i--;
					} 
	
					let href = triggers[i].getAttribute('data-src');
					slide.setAttribute('src', href);
				};
		
				rightArrow.addEventListener('click', () => { 
					nextSlider();
				});

				if(slider.style.display === 'block') {
					document.addEventListener('keydown', (e) => {
						if(e.keyCode == '39') {
							nextSlider();
						}
					});

					document.addEventListener('keydown', (e) => {
						if(e.keyCode == '37') {
							previousSlide();
						}
					});

					document.addEventListener('keydown', (e) => {
						if(e.key == 'Escape' || e.key == 'Enter') {
							closeSlider();
						}
					});
				}

				leftArrow.addEventListener('click', () => {
					previousSlide();
				});
			});
		});
	};

	openSlider();
};

export default carousel;