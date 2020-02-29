$(function () {
    let show = 'show';

    $('input').on('checkval', function () {
        let label = $(this).next('label');
        if (this.value !== '') {
            label.addClass(show);
            this.style.opacity = 1;
        } else {
            label.removeClass(show);
            this.style.opacity = 0.6;
        }
    }).on('keyup', function () {
        $(this).trigger('checkval');
    });
});