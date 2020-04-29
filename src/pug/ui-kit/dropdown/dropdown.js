function dropdownInitiall() {
    let dropdowns = document.querySelectorAll('.js-dropdown');
    for(let i = 0; i < dropdowns.length; i++) {
        dropdown_menu(dropdowns[i])
    }
    dropdown_menu_add_class(dropdowns);
}

function dropdown_menu_add_class(elements) {
    
    elements.forEach((item) => {    
        let link = item.querySelector('.js-dropdown__link');
        let menu = item.querySelector('.js-dropdown__menu');

        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            if(menu.classList.contains('dropdown__menu-active')) {
                menu.classList.remove('dropdown__menu-active');
                item.classList.remove('dropdown-active');
            } else {
                menu.classList.add('dropdown__menu-active')
                item.classList.add('dropdown-active');
            }
        });
    })
}

function dropdown_menu(element) {
    let menu = element.querySelector('.js-dropdown__menu');
    let counts = menu.querySelectorAll('.js-count-number');
    // let clear = menu.querySelector('.js-dropdown__menu-clear');
    let count_guests = [];
    menu.addEventListener('click', function(event) {
        let target = event.target;

        if(target.classList.contains('js-plus')) {
            dropdown_menu_plus(target, counts);
            
        }
        else if(target.classList.contains('js-minus')) {
            dropdown_menu_minus(target, counts);
        };        
    });
}
function dropdown_menu_plus(elem, items) {
    let count = elem.previousElementSibling;
    let idx = Number(count.innerHTML);
    idx++;
    // console.log(`индекс плюса: ${idx}`);
    count.innerHTML = idx;
    dropdown_menu_minus_add_class(count.previousElementSibling);
    dropdown_menu_count_guests(items);
}
function dropdown_menu_minus(elem, items) {
    let count = elem.nextElementSibling;
    let idx = Number(count.innerHTML);
    idx--;

    if(idx <= 0) {
        idx = 0;
        dropdown_menu_minus_remove_class(elem);        
    }
    // console.log(`индекс минуса: ${idx}`);
    count.innerHTML = idx;
    dropdown_menu_count_guests(items);
}
function dropdown_menu_minus_add_class(element) {
    
    element.classList.add('minus-active');
    
}
function dropdown_menu_minus_remove_class(element) {

    element.classList.remove('minus-active');

}

function dropdown_menu_count_guests(elements) {
    let arr = [];
    let result = 0;
    for(let i = 0; i < elements.length; i++) {
        let txt = Number(elements[i].innerHTML);
        arr.push(txt);
        result += arr[i]
    }
    return result;
    
}

dropdownInitiall();

// let dropdown_number_of_guests = document.querySelector('.dropdown-room-amenities');
// let dropdown_link = dropdown_number_of_guests.querySelector('.dropdown__link');
// let dropdown_menu = dropdown_number_of_guests.querySelector('.dropdown__menu');

// dropdown_link.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     // dropdown_number_of_guests.classList.toggle('dropdown-active');
//     dropdown_menu.classList.toggle('dropdown__menu-active');
// });



// function dropdown_guests() {      
//     let dropdown_text = document.querySelector('.dropdown__text');
//     let btns_minus = document.querySelectorAll('.minus');
//     let btns_plus = document.querySelectorAll('.plus');
//     let baseNumbers = document.querySelectorAll('.count-number');
//     let txt = '';  
//         for(let i = 0; i < 3; i++) {

//             let num = Number(baseNumbers[i].textContent);

//             btns_minus[i].addEventListener('click', () => {
//                 if(num == 0) {
//                     num = 0;                    
//                 } else {
//                     num--;
//                     baseNumbers[i].innerHTML = num;
//                     txt = checkdeGuests(num);
//                 }
//                 dropdown_text.innerHTML = `${num} ${txt}`;
//             })

//             btns_plus[i].addEventListener('click', () => {
//                 if(num >= 10) {
//                     num = 10;
//                 } else {
//                     num++;
//                     baseNumbers[i].innerHTML = num;
//                     txt = checkdeGuests(num);      
//                 }
//                 dropdown_text.innerHTML = `${num} ${txt}`;
//             })
//         }

    
// }
// dropdown_guests()

// function checkdeGuests(item) {
//     let t = '';
//     if(item == 1) {
//         t = 'гость';
//     } else if(2 <= item >= 4) {
//         t = 'гостя';
//     } else {
//         t = 'гостей';
//     }
//     return t;
// }

// dropdown_guests()