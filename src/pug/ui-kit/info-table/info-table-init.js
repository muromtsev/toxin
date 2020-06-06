import InfoTable from './info-table';

document.addEventListener('DOMContentLoaded', () => {
    const values = {
        priceOfRoom: '9 999',
        numberOfDays: '4',
        totalPriceOfDays: '39 960',
        discountOfServices: '2 179',
        totalServicesAmount: '0',
        totalAdditionalAmount: '300',
        totalTablePrice: '38 081'
    }
    const infoTables = document.querySelectorAll('.js-info-table');

    infoTables.forEach((val) => {
        new InfoTable(val, values);
    });
});