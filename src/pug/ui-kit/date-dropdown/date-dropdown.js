import TextField from '../text-field/text-field';

class DateDropdown {
    container($container, type) {
        this.$container = $container;
        this.$type = type;
        this.setElements();
    }

    setElements() {
        this.$dateDropdownContainer = this.$container.find(`.js-date-dropdown__input-${this.type}-date`);
        this.textField = new TextField(this.$dateDropdownContainer);
        this.$dateTextFiled = this.textField.getValueElement();
    }

    getValueElement() {
        return $dateTextField;
    }
    eventListenerBind(type, fn) {
        if (this.$dateTextField) this.textField.eventListenerBind(type, fn);
    }
}

export default DateDropdown