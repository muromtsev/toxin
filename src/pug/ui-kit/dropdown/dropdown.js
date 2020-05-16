class Dropdown {
    constructor(element) {
        this.dropdown = element;
        
        this.init();
    }
    init() {
        this.menu   = this.dropdown.querySelector('.js-dropdown__menu');
        this.open   = this.dropdown.querySelector('.js-dropdown__link');
        this.counts = this.menu.querySelectorAll('.js-count-number');
        this.clear  = this.menu.querySelector('.dropdown__menu-clear');

        this.open_menu();
        this.menu.childNodes.length === 4 ? this.close_menu() : null;  
        this.dropdown_menu();
        
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
        this.menu.childNodes.length === 4 ? this.display_clear() : null;
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
    display_clear() {
        this.clear.addEventListener('click', this.handler_clear.bind(this));
    }
    handler_clear() {
        if(this.dropdown.getAttribute('data-dropdown-name') === 'guests') {
            this.dropdown.querySelector('.js-dropdown__text').innerHTML = 'Сколько гостей';
            this.counts.forEach(item => {
                item.innerHTML = 0;
            })
            this.dropdown.querySelectorAll('.js-minus').forEach(elem => {
                elem.classList.remove('js-minus-active');
            })
            this.clear.style.opacity = 0;
            this.clear.style.cursor = 'default';
        }
    }
    write_count_to_array() {
        let array_counts = [];

        this.counts.forEach(item => {
            let number_count = Number(item.textContent);
            array_counts.push(number_count);
        })
        
        return this.write_dropdown_display(array_counts);
    }

    dropdown_count_guests(array_counts, guests_display) {
        let adults_array    = array_counts.slice(0, 2),
            adults_count    = this.adult_count(adults_array),
            babies_count    = array_counts[array_counts.length - 1],
            string_growns,
            string_babies   = '';

        if(adults_count > 0) {
            if(adults_count == 1) {
                string_growns = `${adults_count} гость`
            } else if(adults_count > 1 && adults_count < 5) {
                string_growns = `${adults_count} гостя`
            } else if(adults_count > 4) {
                string_growns = `${adults_count} гостей`
            }
        } else {
            string_growns = 'Сколько гостей'
        }
    
        guests_display.innerHTML = string_growns;
    
        if(babies_count > 0) {
            if(babies_count == 1) {
                string_babies = `${babies_count} младенец`;
            } else if(babies_count > 1 && babies_count < 5) {
                string_babies = `${babies_count} младенца`;
            } else if(babies_count > 4) {
                string_babies = `${babies_count} младенцев`;
            } else {
                string_babies = '';
            }
            guests_display.innerHTML = string_babies;
        }
    
        if(adults_count > 0 && babies_count > 0) {
            guests_display.innerHTML = `${string_growns}, ${string_babies}`;
        }
    }
    dropdown_count_rooms(array_counts, room_display) {
        let [room, bedroom, bathroom]   = array_counts,
            room_txt, bed_txt, bath_txt = '';

        if(room > 0) {
            if(room == 1) {
                room_txt = `${room} спальня`
            } else if(room > 1 && room < 5) {
                room_txt = `${room} спальни`
            } else if(room > 4) {
                room_txt = `${room} спален`
            }            
        } else {
            room_txt = '2 спальни'
        }
        room_display.innerHTML = room_txt;

        
        if(bedroom > 0) {
            if(bedroom == 1) {
                bed_txt = `${bedroom} кровать`
            } else if(bedroom > 1 && bedroom < 5) {
                bed_txt = `${bedroom} кровати`
            } else if(bedroom > 4) {
                bed_txt = `${bedroom} кроватей`
            }
            room_display.innerHTML = bed_txt;
        } else {
            bed_txt = '2 кровати';
        }
        
        
        if(bathroom > 0) {
            if(bathroom == 1) {
                bath_txt = `${bathroom} ванная комната`
            } else if(bathroom > 1 && bathroom < 5) {
                bath_txt = `${bathroom} ванные комн...`
            } else if(bathroom > 4) {
                bath_txt = `${bathroom} ванных комн...`
            }
            room_display.innerHTML = bath_txt;
        } else {
            bath_txt = '';
        }

        if(room > 0 && bedroom > 0) {
            room_display.innerHTML = `${room_txt}, ${bed_txt}`
        } else if(bedroom > 0 && bathroom > 0) {
            room_display.innerHTML = `${bed_txt}, ${bath_txt}`
        } else if(room > 0 && bathroom > 0) {
            room_display.innerHTML = `${room_txt}, ${bath_txt}`            
        } 
        if(room > 0 && bedroom > 0 && bathroom > 0) {
            room_display.innerHTML = `${room_txt}, ${bed_txt}...`
        }
        if(room == 0 && bedroom == 0 && bathroom == 0) {
            room_display.innerHTML = `В фойе на полу!`
        }
    }

    write_dropdown_display(count_guests) {        
        let display,
            displayName = this.dropdown.getAttribute('data-dropdown-name');
        
        if(displayName === 'guests') {
            display = this.dropdown.querySelector('.js-dropdown__text');
            this.dropdown_count_guests(count_guests, display);
            this.dropdown_clear_btn(count_guests);
        } else if(displayName == 'rooms') {
            display = this.dropdown.querySelector('.js-dropdown__text');
            this.dropdown_count_rooms(count_guests, display);
        }
    }
    adult_count(array) {
        let count = 0;

        array.forEach(adult => {
            count += adult;
        })

        return count;
    }
    dropdown_clear_btn(array) {        
        let n = 0;
        array.forEach(num => {
            n += num;
        })
        if(n > 0) {
            this.clear.style.opacity = 1;
            this.clear.style.cursor = 'pointer';
        } else if(n === 0) {
            this.clear.style.opacity = 0;
            this.clear.style.cursor = 'default';
        }
    }
}

export default Dropdown