import $ from 'jquery';
import '../sass/style.scss';

// import '../pug/ui-kit/material-icons/material-icons.js';

import '../pug/ui-kit/checkbox-list/checkbox-list.js';
import '../pug/ui-kit/date-dropdown/date-dropdown.js';


import TextField from '../pug/ui-kit/text-field/text-field';
import Dropdown from '../pug/ui-kit/dropdown/dropdown';
import FilterDateDropdown from '../pug/ui-kit/filter-date-dropdown/filter-date-dropdown';
import initialSlider from '../pug/ui-kit/range-slider/range-slider';
import InfoTable from '../pug/ui-kit/info-table/info-table';
import RoomPreviewSlider from '../pug/ui-kit/room-preview/room-preview';
import RateButton from '../pug/ui-kit/rate-button/rate-button';
import LikeButton from '../pug/ui-kit/like-button/like-button';

function importAll(resolve) {
    resolve.keys().forEach(resolve);
}
importAll(require.context('../img', true, /\.(jpg|png|svg|png)$/));

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.js-dropdown');
    
    dropdowns.forEach(element => {
        const dropdown = new Dropdown(element);
    });

    const rateButtons = document.querySelectorAll('.js-rate-button');
    rateButtons.forEach(element => {
        new RateButton(element);
    });

    const values = {
        priceOfRoom: '9 999',
        numberOfDays: '4',
        totalPriceOfDays: '39 960',
        discountOfServices: '2 179',
        totalServicesAmount: '0',
        totalAdditionalAmount: '300',
        totalTablePrice: '38 081'
    }
    const infoTables = document.querySelectorAll('.js-info-table');

    infoTables.forEach((val) => {
        new InfoTable(val, values);
    })

    const likeButtons = document.querySelectorAll('.js-like-button');

    likeButtons.forEach((item) => new LikeButton(item));

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

    let $previewSliders = $('.js-room-preview');

    $previewSliders.each((i, val) => {
        new RoomPreviewSlider(val);
    });
})






