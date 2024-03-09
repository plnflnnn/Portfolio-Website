const form = (formSelector, btnSelector, inputSelector, textareaSelector) => {
	const form = document.querySelector(formSelector),
		btn = document.querySelector(btnSelector),
		inputs = document.querySelectorAll(inputSelector),
		textarea = document.querySelector(textareaSelector);

	const disabled = () => {
		btn.setAttribute('disabled', true);
	};

	const disabledFalse = () => {
		btn.removeAttribute('disabled');
	};

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
		textarea.value = '';
	};

	const messages = {
		success: 'Thank you for your message! I will contact you shortly.',
		failure: 'Something went wrong...'
	};

	function showMessage(mess) {
		const statusMessage = document.createElement('div');
		statusMessage.classList.add('statusMessages');
		statusMessage.textContent = mess;
		form.insertAdjacentElement('beforeend', statusMessage);
		setTimeout(() => {
			statusMessage.remove();
		}, 700);
	}

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		disabled();

		const formData = new FormData(form);

		fetch('phpmail.php', {
			method: 'POST',
			body: formData
		})
			.then(data => data.text())
			.then(() => {
				showMessage(messages.success);
				clearInputs();
			}).catch(() => {
				showMessage(messages.failure);
			}).finally(() => {
				form.reset();
				disabledFalse();
			});
	});
};

export default form;