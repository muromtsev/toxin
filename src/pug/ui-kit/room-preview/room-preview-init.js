
import RoomPreviewSlider from './room-preview';

$(() => {
    let $previewSliders = $('.js-room-preview');

    $previewSliders.each((i, val) => {
        new RoomPreviewSlider(val);
    });
});