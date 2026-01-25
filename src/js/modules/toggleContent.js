function toggleContent(showBtnSelector, hideBtnSelector, contentElementSelector) {

    const showBtn = document.querySelector(showBtnSelector),
        hideBtn = document.querySelector(hideBtnSelector),
        content = document.querySelector(contentElementSelector);

    if(!showBtn || !hideBtn || !content) return;

    showBtn.addEventListener('click', () => {
        content.classList.add('show');
        showBtn.classList.add('hidden');
        hideBtn.classList.remove('hidden');
    });

    hideBtn.addEventListener('click', () => {
        content.classList.remove('show');
        showBtn.classList.remove('hidden');
        hideBtn.classList.add('hidden');
    });


}

export default toggleContent;