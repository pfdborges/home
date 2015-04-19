$.fn.center = function() {
    this.css({
        'position': 'fixed',
        'left': '50%',
        'top': '50%'
    });
    this.css({
        'margin-left': -this.outerWidth() / 2 + 'px',
        'margin-top': -this.outerHeight() / 2 + 'px'
    });

    return this;
}

$.fn.verticalCenter = function() {
    this.css({
        'position': 'fixed',
        'top': '50%'
    });
    this.css({
        'margin-top': -this.outerHeight() / 2 + 'px'
    });

    return this;
}