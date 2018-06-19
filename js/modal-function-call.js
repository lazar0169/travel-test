windowListener('load', function () {
    trigger('fullSize', {});
});

windowListener('load', function () {
    trigger('setResolution', {})
});

windowListener('load', function () {
    trigger('resizeFont', {})
});

windowListener('resize', function () {
    trigger('setResolution', {})
});

windowListener('resize', function () {
    trigger('resizeFont', {})
});;