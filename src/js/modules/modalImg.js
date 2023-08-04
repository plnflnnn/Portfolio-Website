const modalImg = ( triggerSelector, elementSelector, elementParentSelector, overlaySelector) => {
	const trigger = document.querySelector(triggerSelector),
        div = document.querySelector(elementSelector),
		divParent = document.querySelector(elementParentSelector),
		overlay = document.querySelector(overlaySelector);

	const closeImg = () => {
        divParent.style.display = 'none';
	};

	overlay.addEventListener('click', () => {
		closeImg();
	});


	const openImg = () => {
        trigger.addEventListener('click', () => {
            let href = trigger.getAttribute('data');
            divParent.style.display = 'block';
            div.setAttribute('src', href);

            document.addEventListener('keydown', (e) => {
                if(e.key == 'Escape' || e.key == 'Enter') {
                    closeImg();
                }
            });
        });
	};

	openImg();
};

export default modalImg;