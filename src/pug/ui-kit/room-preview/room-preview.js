import 'slick-carousel';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';

class RoomPreviewSlider {
    constructor(container) {
        this.$container = $(container);
        this.findDOMElement();
        this.sliderInit();
    }
    findDOMElement() {
        this.$slider = this.$container.find('.js-room-preview__slider');
    }

    sliderInit() {
        this.$slider.slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: true,
            useCSS: false,
        });
    }
}

export default RoomPreviewSlider