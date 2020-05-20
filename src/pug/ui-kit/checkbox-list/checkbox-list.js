document.addEventListener('DOMContentLoaded', () => {
    let checkbox_menu = document.querySelector('.checkbox-list__menu');
    let checkboxArrow = document.querySelector('.checkbox__arrow');

    if(checkbox_menu && checkboxArrow) {
        checkboxArrow.addEventListener('click', function(event) {
            event.preventDefault();    
            let labels = document.querySelectorAll('.checkbox-list__menu .check');
            checkbox_menu.classList.toggle('menu-active');
            this.classList.toggle('arrow-active');    
        })
    }
    
});



