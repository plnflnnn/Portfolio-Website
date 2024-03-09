const hamburger = (hamburgerSelector, menuSelector, closeElemSelector, menuOverlaySelector) => {
	const hamburger = document.querySelector(hamburgerSelector),
		menu = document.querySelector(menuSelector),
		closeElem = document.querySelector(closeElemSelector),
		menuOverlay = document.querySelector(menuOverlaySelector);

	const hideMenu = () => {
		menu.classList.remove('active');
		hamburger.style.display = 'flex';
	}

	hamburger.addEventListener('click', () => {
		menu.classList.add('active');
		hamburger.style.display = 'none';
	});

	closeElem.addEventListener('click', () => {
		hideMenu();
	});

	menuOverlay.addEventListener('click', () => {
		hideMenu();
	});

};

export default hamburger;