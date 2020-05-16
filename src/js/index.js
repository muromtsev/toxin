import $ from 'jquery';
import '../sass/style.scss';
import '../pug/ui-kit/checkbox-list/checkbox-list.js';
import '../pug/ui-kit/like-button/like-button.js';
import '../pug/ui-kit/date-dropdown/date-dropdown.js';

import TextField from '../pug/ui-kit/text-field/text-field';
import Dropdown from '../pug/ui-kit/dropdown/dropdown';
import FilterDateDropdown from '../pug/ui-kit/filter-date-dropdown/filter-date-dropdown';
import initialSlider from '../pug/ui-kit/range-slider/range-slider';

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.js-dropdown');
    
    dropdowns.forEach(element => {
        const dropdown = new Dropdown(element);
    })
})
$(() => {
    let $textFields = $('.js-text-field');
    $textFields.each((i, val) => {
        let isMaskedTextField = $(val).hasClass('text-field__masked');
        if(isMaskedTextField) {
            new TextField(val);
        }
    });
    let $calendars = $('.js-filter-date-dropdown');
    $calendars.each((index, val) => {
        new FilterDateDropdown(val);
    });

    initialSlider();
})






