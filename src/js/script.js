import hamburger from './modules/hamburger.js';
import form from './modules/form.js';
import validateForm from './modules/validateForm.js';
import carousel from './modules/carousel.js';
import img from './modules/img.js';

window.addEventListener('DOMContentLoaded', () => {
	hamburger();
	form();
	validateForm('.contacts__policy span', '[name="email"]', '[name="name"]', '.contacts__btn', '[type="checkbox"]', 'input');
	carousel('.resume__certificate', '.carousel__img', '.carousel', '.carousel__btn-right', '.carousel__btn-left', '.carousel__overlay');
	img('.resume__certificate__language', '.modal__img', '.modal', '.modal__overlay');
});