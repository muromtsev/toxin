// let like_button = document.querySelector('.like-button');
let like_button = document.querySelectorAll('.like-button');

function likeCounter(elem) {
    elem.forEach(item => {
        item.addEventListener('click', function(event) {            
            let like = item.querySelector('.like-button__count');
            let idx = +like.innerHTML;

            idx++;

            like.innerHTML = idx;
            
        })
    });
}


likeCounter(like_button)
