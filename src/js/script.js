import navigation from './modules/navigation.js';
import form from './modules/form.js';
import Aos from 'aos';


window.addEventListener('DOMContentLoaded', () => {
	Aos.init({once: false});
	navigation('.hamburger', '.menu', '.menu__close', '.menu__overlay', '.promo__nav');
	form('form', '.contacts__btn', 'input', 'textarea');
});