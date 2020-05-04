class Dropdown {
    constructor(element) {
        this.dropdown = element;

        this.init();
    }
    init() {
        this.menu = this.dropdown.querySelector('.js-dropdown__menu');
        this.open = this.dropdown.querySelector('.js-dropdown__link');
        this.counts = this.menu.querySelectorAll('.js-count-number');

        this.open_menu();
        this.close_menu();
        this.dropdown_menu();
        // console.log(this.menu, this.link)
    }
    open_menu() {
        this.open.addEventListener('click', this.handler_open_menu.bind(this));
    }
    handler_open_menu() {
        if(this.menu.classList.contains('dropdown__menu-active')) {
            this.menu.classList.remove('dropdown__menu-active');
            this.dropdown.classList.remove('dropdown-active');
            this.open.classList.remove('dropdown__link-active');
        } else {
            this.menu.classList.add('dropdown__menu-active')
            this.dropdown.classList.add('dropdown-active');
            this.open.classList.add('dropdown__link-active');
        }
    }
    close_menu() {        
        this.btn_apply = this.menu.querySelector('.js-dropdown__menu-apply');

        this.btn_apply.addEventListener('click', this.handler_close_menu.bind(this));
    }
    handler_close_menu() {
        this.menu.classList.remove('dropdown__menu-active');
        this.dropdown.classList.remove('dropdown-active');
        this.open.classList.remove('dropdown__link-active');    
    }
    dropdown_menu() {
        this.menu.addEventListener('click', this.handler_dropdown_menu.bind(this));
    }
    handler_dropdown_menu(event) {
        let target = event.target;

        if(target.classList.contains('js-plus')) {
            this.menu_btn_plus(target);
        } else if(target.classList.contains('js-minus')) {
            this.menu_btn_minus(target);
        }
    }
    menu_btn_plus(elem) {
        let count   = elem.previousElementSibling,
            idx     = Number(count.innerHTML);
            
        idx++;
        count.innerHTML = idx;
        this.menu_btn_minus_changes_class({subling: count});
        this.write_count_to_array();
    }
    menu_btn_minus(elem) {
        let count   = elem.nextElementSibling,
            idx     = Number(count.innerHTML);
            
        idx--;
        if(idx <= 0) {
            idx = 0;
            this.menu_btn_minus_changes_class({active: false, subling: count});
        }
        count.innerHTML = idx;
        this.write_count_to_array();
    }
    menu_btn_minus_changes_class({active = true, subling}) {
        
        if(active) {
            subling.previousElementSibling.classList.add('js-minus-active');
        } else {
            subling.previousElementSibling.classList.remove('js-minus-active');
        }
    }
    write_count_to_array() {
        let array_counts = [];
        this.counts.forEach(item => {
            let number_count = Number(item.textContent);
            array_counts.push(number_count);
        })
        return console.log(array_counts);
    }

}

export {Dropdown}


// function dropdownInitiall() {
//     let dropdowns = document.querySelectorAll('.js-dropdown');

//     // for(let i = 0; i < dropdowns.length; i++) {
//     //     dropdown_menu(dropdowns[i]);
//     // }
//     let dropdown_guests = document.querySelector('#dropdown-number-of-guests');
//     let dropdown_rooms = document.querySelector('#dropdown-room-amenities');
//     dropdown_menu(dropdown_guests);
//     dropdown_menu(dropdown_rooms);
//     dropdown_menu_change_class(dropdowns);

//     clear_display(dropdown_guests);
//     clear_display(dropdown_rooms);
// };

// function dropdown_menu_change_class(elements) {
    
//     elements.forEach((item) => {    
//         let link = item.querySelector('.js-dropdown__link');
//         let menu = item.querySelector('.js-dropdown__menu');
//         let btn_apply = menu.querySelector('.js-dropdown__menu-apply');

//         link.addEventListener('click', () => {
            
//             if(menu.classList.contains('dropdown__menu-active')) {
//                 menu.classList.remove('dropdown__menu-active');
//                 item.classList.remove('dropdown-active');
//                 link.classList.remove('dropdown__link-active');
//             } else {
//                 menu.classList.add('dropdown__menu-active')
//                 item.classList.add('dropdown-active');
//                 link.classList.add('dropdown__link-active');
//             }
//         });

//         btn_apply.addEventListener('click', () => {
//             menu.classList.remove('dropdown__menu-active');
//             link.classList.remove('dropdown__link-active');
//         });
//     });
// };

// function dropdown_menu(element) {
//     let menu = element.querySelector('.js-dropdown__menu');
//     let counts = menu.querySelectorAll('.js-count-number');        
    
//     menu.addEventListener('click', function(event) {
//         let target = event.target;

//         if(target.classList.contains('js-plus')) {
//             dropdown_menu_plus(element, target, counts);
            
//         }
//         else if(target.classList.contains('js-minus')) {
//             dropdown_menu_minus(element, target, counts);
//         };        
//     });
    
// };

// function dropdown_menu_plus(element, elem, items) {
//     let count   = elem.previousElementSibling;
//     let idx     = Number(count.innerHTML);

//     idx++;

//     count.innerHTML = idx;

//     dropdown_menu_minus_add_class(count.previousElementSibling);
//     dropdown_menu_count_guests(element, items);
// };

// function dropdown_menu_minus(element, elem, items) {
//     let count   = elem.nextElementSibling;
//     let idx     = Number(count.innerHTML);

//     idx--;

//     if(idx <= 0) {
//         idx = 0;
//         dropdown_menu_minus_remove_class(elem);        
//     }

//     count.innerHTML = idx;

//     dropdown_menu_count_guests(element, items);
// };

// function dropdown_menu_minus_add_class(element) {
    
//     element.classList.add('minus-active');
    
// };

// function dropdown_menu_minus_remove_class(element) {

//     element.classList.remove('minus-active');

// };

// function dropdown_menu_count_guests(element, elements) {
//     let arr = [];

//     for(let i = 0; i < elements.length; i++) {
//         let txt = Number(elements[i].innerHTML);
//         arr.push(txt);
//     }    

//     return guests_counts(element, arr);
// };

// function guests_counts(el, array) {
//     let string_growns, 
//         string_babies   = '',
//         sum             = 0,
//         display         = el.querySelector('.dropdown__text'), 
//         clear           = el.querySelector('.dropdown__menu-clear'),        
//         growns          = array.slice(0, 2),
//         babies          = array[array.length - 1];

//     for(let i = 0; i < array.length; i++) {
//         sum += array[i];

//         if(sum === 0) {
//             clear.style.opacity = 0;
//         } else {
//             clear.style.opacity = 1;
//         }
//     };

//     let growns_sum = sum_growns_counts(growns);

//     if(growns_sum > 0) {
//         if(growns_sum == 1) {
//             string_growns = `${growns_sum} гость`
//         } else if(growns_sum > 1 && growns_sum < 5) {
//             string_growns = `${growns_sum} гостя`
//         } else if(growns_sum > 4) {
//             string_growns = `${growns_sum} гостей`
//         }
//     } else {
//         string_growns = 'Сколько гостей'
//     }

//     display.innerHTML = string_growns;

//     if(babies > 0) {
//         if(babies == 1) {
//             string_babies = `${babies} младенец`;
//         } else if(babies > 1 && babies < 5) {
//             string_babies = `${babies} младенца`;
//         } else if(babies > 4) {
//             string_babies = `${babies} младенцев`;
//         } else {
//             string_babies = '';
//         }
//         display.innerHTML = string_babies;
//     }

//     if(growns_sum > 0 && babies > 0) {
//         display.innerHTML = `${string_growns}, ${string_babies}`;
//     }

// };

// function sum_growns_counts(array) {
//     let sum = 0;

//     array.forEach(item => {
//         sum += item;
//     });

//     return sum;
// };

// function clear_display(el) {
//     // let dropdown    = document.querySelector('#dropdown-number-of-guests');
//     let clear       = el.querySelector('.js-dropdown__menu-clear');
//     let display     = el.querySelector('.js-dropdown__text');
//     let counts      = el.querySelectorAll('.js-count-number');

//     clear.addEventListener('click', () => {
//         display.innerHTML = 'Сколько гостей';
//         counts.forEach(item => {
//             item.innerHTML = 0;
//             item.previousElementSibling.classList.remove('minus-active');
//         });
//         clear.style.opacity = 0;
//     })
// }

// dropdownInitiall();