const img = ( triggerSelector, elementSelector, elementParentSelector, overlaySelector) => {
	const trigger = document.querySelector(triggerSelector),
        div = document.querySelector(elementSelector),
		divParent = document.querySelector(elementParentSelector),
		overlay = document.querySelector(overlaySelector),
        body = document.querySelector('body');

	const closeImg = () => {
        divParent.style.display = 'none';
        body.style.overflow = 'auto';
	};

	overlay.addEventListener('click', () => {
		closeImg();
	});


	const openImg = () => {
        trigger.addEventListener('click', () => {
            let href = trigger.getAttribute('data-src');
            divParent.style.display = 'block';
            body.style.overflow = 'hidden';
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

export default img;