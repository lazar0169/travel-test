const view = (function () {
    let tempModelMobileView = get('#model-mobile-view-css');
    let mobileView = function () {

        tempModelMobileView.disabled = false;
    };

    let desktopView = function () {
        tempModelMobileView.disabled = true;
    
    };

    on('resize/mobileView', function (event, tempData) {
        mobileView(tempData.data);
    });

    on('resize/desktopView', function (event, tempData) {
        desktopView(tempData.data);
    });
})();
