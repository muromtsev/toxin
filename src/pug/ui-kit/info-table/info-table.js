class InfoTable {
    constructor(element, values) {
        this.table  = element;
        this.values = values;

        this.findDOMElements();
        if(this.values) this.setValuesDOMElements();

    }

    findDOMElements() {
        this.priceOfDay             = this.table.querySelector('.js-info-table__price');
        this.numberOfDays           = this.table.querySelector('.js-info-table__number-of-days');
        this.totalPriceOfDays       = this.table.querySelector('.js-info-table__total-amount');
        this.discountOfServices     = this.table.querySelector('.js-info-table__discount');
        this.totalServicesAmount    = this.table.querySelector('.js-info-table__total-services-amount');
        this.totalAdditionalAmount  = this.table.querySelector('.js-info-table__total-additional-amount');
        this.totalTablePrice        = this.table.querySelector('.js-info-table__total-table-price');
    }

    setValuesDOMElements() {
        const {
            priceOfRoom,
            numberOfDays,
            totalPriceOfDays,
            discountOfServices,
            totalServicesAmount,
            totalAdditionalAmount,
            totalTablePrice
        } = this.values;

        this.priceOfDay.textContent             = priceOfRoom;
        this.numberOfDays.textContent           = numberOfDays;
        this.totalPriceOfDays.textContent       = totalPriceOfDays;
        this.discountOfServices.textContent     = discountOfServices;
        this.totalServicesAmount.textContent    = totalServicesAmount;
        this.totalAdditionalAmount.textContent  = totalAdditionalAmount;
        this.totalTablePrice.textContent        = totalTablePrice;
    }
}

export default InfoTable