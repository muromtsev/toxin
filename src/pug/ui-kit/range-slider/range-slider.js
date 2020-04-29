import $ from 'jquery';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min';

$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 15000,
  from: 5000,
  to: 10000,
  hide_from_to: true
});

