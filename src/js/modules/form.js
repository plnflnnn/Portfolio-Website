const form = () => {
	const form = document.querySelector('form');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const messages = {
			loading: 'Loading...',
			success: 'Thank you for your message! I will contact you shortly.',
			failure: 'Something went wrong...'
		};

		function showMessage(mess) {
			const statusMessage = document.createElement('div');
			statusMessage.style.cssText = `
			  display: block;
			  margin: 0 auto;
			  padding-top: 15px;
			  font-weight:  300;
			  font-size: 16px;
			`;
			statusMessage.classList.add('statusMessages');
			statusMessage.textContent = mess;
			form.insertAdjacentElement('afterend', statusMessage);

			setTimeout(() => {
				statusMessage.remove();
			}, 3000);
		}

		const formData = new FormData(form);

		const inputs = document.querySelectorAll('input'),
			textarea = document.querySelector('[type="text"]');

		const clearInputs = () => {
			inputs.forEach(item => {
				item.value = '';
			});
			textarea.value = '';
		};

		fetch('mailer/smart.php', {
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
			});
	});
};

export default form;