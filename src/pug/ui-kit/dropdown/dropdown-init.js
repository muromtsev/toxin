
import Dropdown from './dropdown';

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.js-dropdown');
    
    dropdowns.forEach(element => {
        const dropdown = new Dropdown(element);
    });
});