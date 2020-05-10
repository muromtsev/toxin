function likeButton() {
    let btns = document.querySelectorAll('.js-like-button');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => { 
            changeClass(btn);
        })
    });      
    function changeClass(elem) {
        let icon = elem.querySelector('.js-like-button__heart').firstElementChild,
            count = elem.querySelector('.js-like-button__count'),
            idx = Number(count.innerHTML),
            txt = '';
        
        if(elem.classList.contains('js-like-button__active')) {
            elem.classList.remove('js-like-button__active');
            txt = 'favorite_border';
            idx = idx - 1;
        }
        else {
            elem.classList.add('js-like-button__active');
            txt = 'favorite';
            idx = idx + 1;
        }
        icon.innerHTML = txt;
        count.innerHTML = idx;
    }
}
likeButton();