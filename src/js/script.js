import hamburger from './modules/hamburger.js';
import carousel from './modules/carousel.js';
import img from './modules/img.js';
import validateForm from './modules/validateForm.js';
import form from './modules/form.js';


window.addEventListener('DOMContentLoaded', () => {
	hamburger();
	carousel('.resume__certificate', '.carousel__img', '.carousel', '.carousel__btn-right', '.carousel__btn-left', '.carousel__overlay');
	img('.resume__certificate__language', '.modal__img', '.modal', '.modal__overlay');
	img('.resume__certificate__language-korean', '.modal__img', '.modal', '.modal__overlay');
	validateForm('.contacts__policy span', '[name="email"]', '[name="name"]', '.contacts__btn', '[type="checkbox"]', 'input');
	form();
});