import 'jquery-bar-rating/dist/jquery.barrating.min';
import 'jquery-bar-rating/dist/themes/css-stars.css';


class RateButton {
    constructor(element) {
        this.$container = $(element);
        this.isReadonly = false;
        this.findDOMElement();
        this.initPlugin();
    }

    findDOMElement() {
        this.rate_button = this.$container.find('.js-widget-rate-button');
        this.valueRating = this.rate_button.attr('data-rating');
        this.valueReadonly = this.rate_button.attr('data-readonly');
    }
    initPlugin() {
        this.valueReadonly ? this.isReadonly = true : this.isReadonly = false;

        this.rate_button.barrating({
            theme: 'css-stars',
            showSelectedRating: false,
            initialRating: this.valueRating,
            readonly: this.valueReadonly
        });
    }
}

export default RateButton