const hamburger = () => {
	const hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.menu'),
		closeElem = document.querySelector('.menu__close'),
		menuOverlay = document.querySelector('.menu__overlay');

	hamburger.addEventListener('click', () => {
		menu.classList.add('active');
		hamburger.style.display = 'none';
	});

	closeElem.addEventListener('click', () => {
		menu.classList.remove('active');
		hamburger.style.display = 'flex';
	});

	menuOverlay.addEventListener('click', () => {
		menu.classList.remove('active');
		hamburger.style.display = 'flex';
	});

};

export default hamburger;