const form = (formSelector, btnSelector, inputSelector, textareaSelector) => {
	const forms = document.querySelectorAll(formSelector);

	const normalInput = (input) => {
		input.style.border = '1px solid #000';
	};
	const errorInput = (input) => {
		input.style.border = '1px solid #B31312';
	};

	const showValidationMessage = (element, message) => {
		const validationMessage = document.createElement('div');
		validationMessage.style.cssText = `
			font-size: 14px;
			color: #B31312;
		`;
		validationMessage.classList.add('validationMessage');
		validationMessage.textContent = message;
		element.insertAdjacentElement('afterend', validationMessage);
	};

	const deleteMessages = () => {
		document.querySelectorAll('.validationMessage').forEach(el => el.remove());
	};

	const messages = {
		loading: 'Loading...',
		success: 'Thank you for your message! I will contact you shortly.',
		failure: 'Something went wrong...'
	};

	const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

	forms.forEach((form) => {
		const btn = form.querySelector(btnSelector);
		const inputs = form.querySelectorAll(inputSelector);
		const textarea = form.querySelector(textareaSelector);

		const name = form.querySelector('[name="name"]');
		const email = form.querySelector('[name="email"]');
		const checkbox = form.querySelector('[name="checkbox"]');
		const span = form.querySelector('.contacts__policy span');

		inputs.forEach(input => {
			input.addEventListener('input', () => {
				input.style.backgroundColor = '#fff';
			});
		});

		const nameValidation = () => {
			if (!name || name.value.replace(/\d/g, '').trim() === '') {
				errorInput(name);
				return false;
			}
			normalInput(name);
			return true;
		};

		const emailValidation = () => {
			if (!email || email.value.trim() === '' || !isValidEmail(email.value.trim())) {
				errorInput(email);
				showValidationMessage(email, 'Please enter a valid email address');
				return false;
			}
			normalInput(email);
			return true;
		};

		const checkboxValidation = () => {
			if (!checkbox || !checkbox.checked) {
				span?.classList.add('error');
				return false;
			}
			span?.classList.remove('error');
			return true;
		};

		const clearInputs = () => {
			inputs.forEach(item => item.value = '');
			if (textarea) textarea.value = '';
		};

		const clearMessage = () => {
			if(form.querySelector('.formMessage')) form.querySelector('.formMessage').remove();
			if(form.querySelector('.statusMessages')) form.querySelector('.statusMessages').remove();
		}

		const showMessage = (form, mess) => {
			clearMessage();
			const statusMessage = document.createElement('div');
			statusMessage.classList.add('statusMessages');
			statusMessage.textContent = mess;
			form.appendChild(statusMessage);

			setTimeout(() => {
				statusMessage.remove();
			}, 3000);
		};

		const formMessage = () => {
			clearMessage();
            const message = document.createElement('div');
            message.classList.add('formMessage');
            message.textContent = 'You need fill in the name and email field and agree to the privacy policy to submit the form.';
            form.insertAdjacentElement('beforeend', message);

            setTimeout(() => {
                message.remove();
                btn.removeAttribute('disabled');
            }, 2000);
        }


		form.addEventListener('submit', (e) => {
			e.preventDefault();
			deleteMessages();

			const validName = nameValidation();
			const validEmail = emailValidation();
			const validCheckbox = checkboxValidation();

			if (!validName || !validEmail || !validCheckbox) {
				formMessage();
				return;
			}

			showMessage(form, messages.loading);
			btn.setAttribute('disabled', 'true');

			const formData = new FormData(form);

			fetch('phpmail.php', {
				method: 'POST',
				body: formData
			})
				.then(data => data.text())
				.then(() => {
					showMessage(form, messages.success);
					clearInputs();
				})
				.catch(() => {
					showMessage(form, messages.failure);
				})
				.finally(() => {
					form.reset();
					btn.removeAttribute('disabled');
				});
		});
	});
};

export default form;
