import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker/dist/js/datepicker.min.js';

$('.datepicker-here').datepicker({
    // dateFormat: 'dd M -',
    position: 'bottom left',
    range: true,
    clearButton: true,
    navTitles: {
        days: 'MM, <i>yyyy</i>',
        months: 'yyyy'
    },
    onSelect: function(formattedDate, date, inst) {
        console.log(inst.el.value);
    },

    
})




$.fn.datepicker.language['ru'] =  {
    days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd M',
    timeFormat: 'hh:ii',
    firstDay: 1
};