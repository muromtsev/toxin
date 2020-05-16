import Calendar from '../calendar/calendar';
import DateDropdown from '../date-dropdown/date-dropdown';

class FilterDateDropdown {
    constructor(calendar) {
        this.$calendar = $(calendar);
    }

    findElements() {
        this.input = new DateDropdown(this.$calendar, 'alone');
        this.$input = this.input.getValueElement();
        this.isRange = false;

        if(this.$input.length === 0) {
            this.isRange = true;
            this.startInput = new DateDropdown(this.$calendar, 'start');
            this.$startInput = this.startInput.getValueElement();
            this.endInput = new DateDropdown(this.$calendar, 'end');
            this.$endInput = this.input.getValueElement();
            this.datepickerPluginInstance = this.$startInput.datepicker().data('datepicker');
        }
    }
    initCalendar() {
        if(this.isRange) {
            let { $startInput, $endInput } = this;

            $startInput.datepicker({
                range: true,
                multipleDatesSeparator: ' - ',
                language: 'ru',
                clearButton: true,
            });

            $startInput.datepicker({
                onSelect(formattedDate) {
                    let inputValues = formattedDate.split('-');
                    let [startValue, secondValue] = inputValues;
                    $startInput.val(startInput);
                    $endInput.val(endInput);
                },
            });

            new Calendar(this.$startInput.datepicker().data('datepicker'), this.$calendar);
            this.initInput();
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
        this.datepickerPluginInstance.$dapicker.addClass('datepicker-smiller');
    }
}

export default FilterDateDropdown