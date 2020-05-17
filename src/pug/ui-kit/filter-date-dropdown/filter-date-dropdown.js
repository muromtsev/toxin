import Calendar from '../calendar/calendar';
import DateDropdown from '../date-dropdown/date-dropdown';

class FilterDateDropdown {
    constructor(calendar) {
        this.$calendar = $(calendar);
        
        this.findDOMElements();
        this.initCalendar();
    }

    findDOMElements() {
        this.input = new DateDropdown(this.$calendar, 'alone');
        this.$input = this.input.getElement();        

        if(this.$input.length === 0) {
            this.isRange = true;
            this.startInput = new DateDropdown(this.$calendar, 'start');
            
            this.$startInput = this.startInput.getElement();
            this.endInput = new DateDropdown(this.$calendar, 'end');
            this.$endInput = this.endInput.getElement();
            this.datepickerPluginInstance = this.$startInput.datepicker().data('datepicker');
        }
    }

    initCalendar() {
        if(this.isRange) {
            const { $startInput, $endInput } = this;
            $startInput.datepicker({
                range: true,
                multipleDatesSeparator: ' - ',
                language: 'ru',
                clearButton: true,
            });
            $startInput.datepicker({
                onSelect(formattedDate) {
                    const inputValues = formattedDate.split('-');
                    const [startValue, secondValue] = inputValues;
                    $startInput.val(startValue);
                    $endInput.val(secondValue);
                },
            });

            new Calendar(this.$startInput.datepicker().data('datepicker'), this.$calendar);
            this.initEndInput();
        } else {
            this.$input.datepicker({
                range: true,
                multipleDatesSeparator: ' - ',
                language: 'ru',
                dateFormat: 'dd M',
                clearButton: true,
            });
            this.datepickerPluginInstance = this.$input.datepicker().data('datepicker');
            
            new Calendar(this.datepickerPluginInstance, this.$calendar);
            this.setAdditionalClass();
        }
    }

    initEndInput() {
        this.endInput.eventListenerBind('click', this.handleEndInputClick.bind(this));
    }
    handleEndInputClick() {
        this.datepickerPluginInstance.show();
    }
    setAdditionalClass() {
        this.datepickerPluginInstance.$datepicker.addClass('datepicker--smaller');
    }
}

export default FilterDateDropdown