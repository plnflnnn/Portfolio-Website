const navigation = (
	hamburgerSelector,
	menuSelector,
	closeElemSelector,
	menuOverlaySelector,
	promoNavSelector
) => {
	const hamburger = document.querySelector(hamburgerSelector),
		menu = document.querySelector(menuSelector),
		closeElem = document.querySelector(closeElemSelector),
		menuOverlay = document.querySelector(menuOverlaySelector),
		promoNav = document.querySelector(promoNavSelector);

	let showFixedNav = true;

	const handleScroll = () => {
		if (!showFixedNav) return;
		const scrollY = window.scrollY;
		const vh = window.innerHeight;
		if (scrollY > (0)) { //vh - 50
			promoNav.classList.add('scroll');
		} else {
			promoNav.classList.remove('scroll');
		}
	};

	document.addEventListener('scroll', handleScroll);

	const hideMenu = () => {
		menu.classList.remove('active');
		hamburger.style.display = 'flex';
		showFixedNav = true;
		handleScroll();
	};

	hamburger.addEventListener('click', () => {
		menu.classList.add('active');
		hamburger.style.display = 'none';
		showFixedNav = false;
		promoNav.classList.remove('scroll');
	});

	closeElem.addEventListener('click', hideMenu);
	menuOverlay.addEventListener('click', hideMenu);


	/*document.querySelectorAll('a[href^="#"]').forEach(link => {
		link.addEventListener('click', function (e) {
		  const targetId = this.getAttribute('href').slice(1);
		  const targetEl = document.getElementById(targetId);
  
		  if (targetEl) {
			e.preventDefault();
			targetEl.scrollIntoView({ behavior: 'smooth' });
  
			history.replaceState(null, '', window.location.pathname);
		  }
		});
	});*/

	document.querySelectorAll('a[href^="#"]').forEach(link => {
		link.addEventListener('click', function (e) {
		  const targetId = this.getAttribute('href').slice(1);
		  const targetEl = document.getElementById(targetId);
	  
		  if (targetEl) {
			e.preventDefault();
	  
			const offset = 70;
			const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
			const scrollToPosition = targetPosition - offset;
	  
			window.scrollTo({
			  top: scrollToPosition,
			  behavior: 'smooth'
			});
	  
			history.replaceState(null, '', window.location.pathname);
		  }
		});
	  });
	  
};

export default navigation;
