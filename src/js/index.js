import $ from 'jquery';
import '../sass/style.scss';
import '../pug/ui-kit/range-slider/range-slider.js';
import '../pug/ui-kit/checkbox-list/checkbox-list.js';
import '../pug/ui-kit/like-button/like-button.js';
import '../pug/ui-kit/dropdown/dropdown.js';

import {Dropdown} from '../pug/ui-kit/dropdown/dropdown'

// require.context("../img", true, /\.(png|svg|jpg|gif)$/);

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.js-dropdown');
    dropdowns.forEach(element => {
        const dropdown = new Dropdown(element);
    })
})




