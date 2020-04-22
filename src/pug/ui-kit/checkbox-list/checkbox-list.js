let checkbox_menu = document.querySelector('.checkbox-list__menu');
let checkboxArrow = document.querySelector('.checkbox__arrow');
checkboxArrow.addEventListener('click', function(event) {
    event.preventDefault();    
    
    checkbox_menu.classList.toggle('menu-active');
    this.classList.toggle('arrow-active');
    let inps = document.querySelectorAll('.checkbox-list__menu .check__input');
    let lbs = document.querySelectorAll('.checkbox-list__menu .check');
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

