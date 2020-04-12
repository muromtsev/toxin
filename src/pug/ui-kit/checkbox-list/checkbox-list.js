let checkbox_menu = document.querySelectorAll('.checkbox-list__menu')[1];
let checkboxArrow = document.querySelectorAll('.checkbox__arrow')[1];
checkboxArrow.addEventListener('click', function(event) {
    event.preventDefault();    
    
    checkbox_menu.classList.toggle('menu-active');
    this.classList.toggle('arrow-active');
    let inps = document.querySelectorAll('.checkbox-list__menu .check__input');
    let lbs = document.querySelectorAll('.checkbox-list__menu .check');
    console.log(lbs[1].childNodes[2].textContent);
    let arrayItems = [];
    inps.forEach((item, index) => {
        item.addEventListener('input', () => {
            if(item.checked) {
                arrayItems.push(item.nextSibling.nextSibling.textContent)
            }
            console.log(arrayItems);
        })
    })
    
})

