const mobileView = (function () {

    let mobileViewPrivate = function () {
        if (tempBody[0].clientWidth < tempBody[0].clientHeight) {
            tempModelMobileView.disabled = false;
        }
        else {
            tempModelMobileView.disabled = true;
        }
    };

    on('mobileView', function (event, tempData) {
        mobileViewPrivate(tempData.data);
    });
})();