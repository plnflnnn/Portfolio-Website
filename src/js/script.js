import navigation from './modules/navigation.js';
import form from './modules/form.js';
import showImg from './modules/showImg.js';
import toggleContent from './modules/toggleContent.js';
import Aos from 'aos';


window.addEventListener('DOMContentLoaded', () => {
	Aos.init({once: false});
	navigation('.hamburger', '.menu', '.menu__close', '.menu__overlay', '.nav');
	form('form', '.contacts__btn', 'input', 'textarea');
	showImg('.resume__certificate__language', '.modal__img', '.modal', '.modal__overlay');
	showImg('.resume__certificate__language-korean', '.modal__img', '.modal', '.modal__overlay');
	toggleContent('.portfolio__btn[data-show="more"]', '.portfolio__btn[data-show="less"]', '.more_content');
});