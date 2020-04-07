let dropdown_number_of_guests = document.querySelector('.number-of-guests');
let dropdown_link = document.querySelector('.dropdown__link');
let dropdown_menu = document.querySelector('.dropdown__menu');

dropdown_link.addEventListener('click', (evt) => {
    evt.preventDefault();
    dropdown_number_of_guests.classList.toggle('dropdown-active');
    dropdown_menu.classList.toggle('dropdown__menu-active');
});

dropdown_menu.addEventListener('click', (evt) => {    
    let target = evt.target;
    
    if(target.className == 'btn-minus') {        
        console.log(target.nextSibling.textContent);
    }
    else if(target.className == 'btn-plus') {       
        console.log(target.previousSibling.textContent);
    }
})