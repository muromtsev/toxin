import 'inputmask/dist/jquery.inputmask.min';

class TextField {
    constructor(container) {
        const isThatElement = $(container).hasClass('js-text-field');
        if (isThatElement) this.$textField = $(container);
        else this.$textField = $(container).find('input.js-text-field');
        
        this.setMasks();
      }
    
      setMasks() {
        const isMaskedTextField = this.$textField.hasClass('text-field__masked');
        if (isMaskedTextField) {
          this.$textField.inputmask({
            alias: 'datetime',
            inputFormat: 'dd.mm.yyyy',
            placeholder: 'ДД.ММ.ГГГГ',
          });
        }
      }
    
      getElement() {
        return this.$textField;
      }
      eventListenerBind(type, fn) {
        if(this.$textField) this.$textField.on(type, fn);
      }
    
}
export default TextField;