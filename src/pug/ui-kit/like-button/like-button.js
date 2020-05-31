import MaterialIcons from '../material-icons/material-icons';

class LikeButton {
    constructor(element) {
        this.button = element;
    
        this.findDomElement();
        this.bindEventListener();
        this.setStage();
    }
    
    findDomElement() {
        this.heartContainer = this.button.querySelector('.js-like-button__heart');
        this.countLikes = this.button.querySelector('.js-like-button__count');
        this.stageData = this.button.dataset.stage;
        this.heart = new MaterialIcons(this.heartContainer);
    }
    bindEventListener() {
        this.button.addEventListener('click', this.handleButtonClick.bind(this));
    }
    handleButtonClick() {
        this.button.classList.toggle('like-button_active');
    
        if(this.button.className.includes('like-button_active')) {
            this.setActive();
            this.countLikes.textContent = Number(this.countLikes.textContent) + 1;
        }
        else {
            this.setUnActive();
            if(this.countLikes.textContent >= 0) {
            this.countLikes.textContent = Number(this.countLikes.textContent) - 1;
            }
        }
        
    }
    setStage() {
        if(this.stageData === 'true') {
            this.setActive();
        }
        else if(this.stageData === 'false') {
            this.setUnActive();
        }
    }
    setActive() {
        this.button.classList.add('like-button_active');
        this.heart.setColor('purple');
        this.heart.setTextContent('favorite');
        this.countLikes.classList.add('like-button__count-active');
    }
    setUnActive() {
        this.button.classList.remove('like-button_active');
        this.heart.setColor('dark-shade-lighten');
        this.heart.setTextContent('favorite_border');
        this.countLikes.classList.remove('like-button__count-active');
    }
}

export default LikeButton;