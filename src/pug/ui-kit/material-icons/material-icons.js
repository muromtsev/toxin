class MaterialIcons {
    constructor(container) {
        this.container = container;

        this.setDomElement();
    }
    
    setDomElement() {
        this.elementHTML = this.container.querySelector('.material-icons');
    }
    setColor(color) {
        this.elementHTML.classList.remove('material-icons__color-purple');
        this.elementHTML.classList.remove('material-icons__colordark-shade-lighten');
        this.elementHTML.classList.add(`material-icons__color-${color}`);
    }
    getElement() {
        return this.elementHTML;
    }
    getTextContent() {
        return this.elementHTML.textContent;
    }
    setTextContent(text) {
        this.elementHTML.textContent = text;
    }
}

export default MaterialIcons;