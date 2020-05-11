import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min';

function initialSlider() {
  $('.js-range-slider__slider').ionRangeSlider({
    onStart(data) {
      const {from, to} = data;
      $('.js-range-slider__price').val(`${from}₽ - ${to}₽`);
    },
    onChange(data) {
      const {from, to} = data;
      $('.js-range-slider__price').val(`${from}₽ - ${to}₽`);
    }
  });
}

export default initialSlider





