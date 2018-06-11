const mobileView = (function () {
    let tempBody = get('tag', 'body');
    let tempMobileView = get('#', 'model-mobile-view-css');

    let mobileViewPrivate = function () {
        if (tempBody[0].clientWidth < tempBody[0].clientHeight) {
            tempMobileView.disabled = false;
        }
        else {
            tempMobileView.disabled = true;
        }
    };

    on('mobileView', function (event, tempData) {
        mobileViewPrivate(tempData.data);
    });
})();