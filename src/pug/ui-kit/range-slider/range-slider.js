import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min';

class RangeSlider {
  constructor(element) {
    this.$container = $(element);
    this.findDomElement();
    this.initSlider();

  }

  findDomElement() {
    this.$slider = $container.find('.js-range-slider__slider');
    this.$price = $container.find('.js-range-slider__price');
  }

  initSlider() {
    this.$slider.ionRangeSlider({
      onStart(data) {
        const {from, to} = data;
        this.$price.val(`${from}₽ - ${to}₽`);
      },
      onChange(data) {
        const {from, to} = data;
        this.$price.val(`${from}₽ - ${to}₽`);
      }
    })
  } 
};

export default initialSlider





