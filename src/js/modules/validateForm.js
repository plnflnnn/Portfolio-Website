const validateForm = (spanSelector, mailInputSelector, nameSelector, btnSelector, checkboxSelector, inputsSelector) => {
	const span = document.querySelector(spanSelector),
		mailInput = document.querySelector(mailInputSelector),
		name = document.querySelector(nameSelector),
		btn = document.querySelector(btnSelector),
		checkbox = document.querySelector(checkboxSelector),
		inputs = document.querySelectorAll(inputsSelector);

	inputs.forEach(input => {
		input.addEventListener('input', (e) => {
			e.preventDefault();
			input.style.backgroundColor = '#ffff';
		});
	});

	const normalInput = (input) => {
		input.style.cssText = `
		border: 1px solid #000;
		box-shadow: none;
		`;
	};

	const errorInput = (input) => {
		input.style.cssText = `
		border: 1px solid #B31312;
		box-shadow: 1px 1px 3px #B31312;
		`;
	};

	const deleteMessage = () => {
		if (document.querySelector('.validationMessage') !== null) {
			document.querySelectorAll('.validationMessage').forEach(item => item.remove());
		}
	};

	// email

	const showValidationMessage = () => {
		const validationMessage = document.createElement('div');
		validationMessage.style.cssText = `
			  font-size: 14px;
			  position: absolute;
			  color: #B31312;
			`;
		validationMessage.classList.add('validationMessage');
		validationMessage.textContent = 'Please, enter valid email address';
		mailInput.insertAdjacentElement('afterend', validationMessage);
	};

	const emailValidation = () => {
		if (mailInput.value == '' || mailInput.value == null) {
			errorInput(mailInput);
		}

		if (mailInput.value.match(/[^a-z 0-9 @]/ig)) {
			deleteMessage();
			normalInput(mailInput);
		} else {
			errorInput(mailInput);
		}
	};

	mailInput.addEventListener('keypress', () => {
		emailValidation();
	});

	mailInput.addEventListener('input', (e) => {
		e.preventDefault();
		emailValidation();
	});

	mailInput.addEventListener('blur', () => {
		if (!mailInput.value.match(/[^a-z 0-9 @]/ig)) {
			deleteMessage();
			showValidationMessage(mailInput);
			errorInput(mailInput);
		}
	});

	//name

	const nameValidation = () => {
		if (name.value.replace(/ /g, '') == '' || name.value == null || name.value.match(/\d/ig)) {
			errorInput(name);
		} else {
			normalInput(name);
		}

		if(name.value.match(/[^a-z]/ig)) {
			normalInput(name);
		}
	};

	name.addEventListener('input', (e) => {
		e.preventDefault();
		nameValidation();
	});

	name.addEventListener('keypress', () => {
		nameValidation();
	});

	name.addEventListener('blur', () => {
		nameValidation();
	});

	//

	const checkboxValidation = () => {
		if(!checkbox.checked) {
			span.classList.add('error');
		} 
		
		if(checkbox.checked) {
			span.classList.remove('error');
		}
	};

	//btn

	const disabled = () => {
		btn.setAttribute('disabled', true);
	};

	const disabledFalse = () => {
		btn.removeAttribute('disabled');
	};


	if(checkbox.checked && mailInput.value.match(/[^a-z 0-9 @]/ig)) {
		disabledFalse();
	} 

	btn.addEventListener('click', () => {

		emailValidation();

		nameValidation();

		checkboxValidation();

		if(checkbox.checked && mailInput.value.match(/[^a-z 0-9 @]/ig)) {
			disabledFalse();
		} else {
			disabled();
			const form = document.querySelector('form');
			const formMessage = () => {
					const message = document.createElement('div');
					message.classList.add('formMessage');
					message.textContent = 'You need fill in the name and email field and agree to the privacy policy to submit the form.';
					form.insertAdjacentElement('beforeend', message);
		
					setTimeout(() => {
						message.remove();
						disabledFalse();
					}, 3000);
			}
			formMessage();
		}
	});
};

export default validateForm;