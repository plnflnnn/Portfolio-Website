import navigation from './modules/navigation.js';
//import carousel from './modules/carousel.js';
//import img from './modules/img.js';
//import validateForm from './modules/validateForm.js';
import form from './modules/form.js';
import Aos from 'aos';


window.addEventListener('DOMContentLoaded', () => {
	Aos.init({once: false});
	navigation('.hamburger', '.menu', '.menu__close', '.menu__overlay', '.promo__nav');
	form('form', '.contacts__btn', 'input', '[type="text"]');
});