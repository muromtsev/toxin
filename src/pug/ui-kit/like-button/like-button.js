class LikeButton {
    constructor(element) {
        this.btn = element;
        this.cons();
    }

    cons() {
        this.btn.addEventListener('mousemove', function() {
            console.log(1);
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.js-like-button');
    likeButtons.forEach((item) => new LikeButton(item));
})

export default LikeButton
