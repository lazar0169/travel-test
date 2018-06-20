windowListener('load', function () {
    trigger('modal', {});
});

windowListener('load', function () {
    trigger('setResolution', {})
});

windowListener('resize', function () {
    trigger('setResolution', {})
});

