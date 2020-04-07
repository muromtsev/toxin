let dropdown_number_of_guests = document.querySelector('.number-of-guests');
let dropdown_link = document.querySelector('.dropdown__link');
let dropdown_menu = document.querySelector('.dropdown__menu');

dropdown_link.addEventListener('click', (evt) => {
    evt.preventDefault();
    dropdown_number_of_guests.classList.toggle('dropdown-active');
    // dropdown_menu.classList.toggle('dropdown__menu-active');
});



function dropdown_guests() {      
    let dropdown_text = document.querySelector('.dropdown__text');
    let btns_minus = document.querySelectorAll('.btn-minus');
    let btns_plus = document.querySelectorAll('.btn-plus');
    let baseNumbers = document.querySelectorAll('.count-number');
    let txt = '';  
        for(let i = 0; i < 3; i++) {

            let num = Number(baseNumbers[i].textContent);

            btns_minus[i].addEventListener('click', () => {
                if(num == 0) {
                    num = 0;                    
                } else {
                    num--;
                    baseNumbers[i].innerHTML = num;
                    txt = checkdeGuests(num);
                }
                dropdown_text.innerHTML = `${num} ${txt}`;
            })

            btns_plus[i].addEventListener('click', () => {
                if(num >= 10) {
                    num = 10;
                } else {
                    num++;
                    baseNumbers[i].innerHTML = num;
                    txt = checkdeGuests(num);      
                }
                dropdown_text.innerHTML = `${num} ${txt}`;
            })
        }

    
}
dropdown_guests()

function checkdeGuests(item) {
    let t = '';
    if(item == 1) {
        t = 'гость';
    } else if(2 <= item >= 4) {
        t = 'гостя';
    } else {
        t = 'гостей';
    }
    return t;
}

dropdown_guests()