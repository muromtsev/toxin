function likeButton() {
    let btns = document.querySelectorAll('.js-like-button');
    
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            
            changeClass(btn);
            changeCount(btn);

        })
    });        
    
    function changeCount(elem) {
        let count = elem.querySelector('.js-like-button__count');
        let idx = Number(count.innerHTML);
            idx++;
            count.innerHTML = idx;
    };
    function changeClass(elem) {
        let icon = elem.querySelector('.js-like-button__heart').firstElementChild;
        let txt = '';
        
        if(elem.classList.contains('js-like-button__active')) {
            elem.classList.remove('js-like-button__active');
            txt = 'favorite_border';
        }
        else {
            elem.classList.add('js-like-button__active');
            txt = 'favorite';
        }
        icon.innerHTML = txt;
    }
}
likeButton();