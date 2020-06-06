
import FilterDateDropdown from './filter-date-dropdown';

$(() => {
    let $calendars = $('.js-filter-date-dropdown');
    $calendars.each((index, val) => {
        new FilterDateDropdown(val);
    });
});