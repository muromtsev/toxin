class CheckboxList {
    constructor(container) {
        this.container = container;
        
        this.findDomElement();
        this.bindEventListener();
    }

    findDomElement() {
        this.checkboxArrow = this.container.querySelector('.js-checkbox-list__arrow');
        this.checkboxMenu = this.container.querySelector('.js-checkbox-list__menu');
    }
    bindEventListener() {
        this.container.addEventListener('click', this.handlerCheckboxMenu.bind(this));
    }
    handlerCheckboxMenu(event) {
        let target = event.target;
        if(target.tagName === 'P' || target.tagName === 'I') {
            this.checkboxMenu.classList.toggle('menu-active');
            this.checkboxArrow.classList.toggle('arrow-active');
        }
    }
}

export default CheckboxList;