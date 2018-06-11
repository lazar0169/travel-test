const resizeResolution = (function () {

    let setResolutionPrivate = function () {

        let tempClientWidth = tempBody[0].clientWidth;
        let tempClientHeight = tempBody[0].clientHeight;
        let tempResolution = tempClientWidth / tempClientHeight;

        if (tempResolution >= SCREEN_RESOLUTION) {
            let tempNewClientWidth = tempClientHeight * SCREEN_RESOLUTION;
            let tempNewClientWidthPx = `${tempNewClientWidth}px`;
            tempMainSection.style.width = tempNewClientWidthPx;
            tempMainSection.style.height = `${tempClientHeight}px`;
            trigger('mobileView', { });
        }
        else {
            let tempNewClientHeight = tempClientWidth / SCREEN_RESOLUTION
            let tempNewClientHeightPx = `${tempNewClientHeight}px`;
            width = tempClientWidth;
            height = tempNewClientHeight;
            tempMainSection.style.height = tempNewClientHeightPx;
            tempMainSection.style.width = `${tempClientWidth}px`;
            trigger('mobileView', { });
        }
    };

    on('setResolution', function () {
        setResolutionPrivate();
        if (tempMainSection.style.visibility != 'visible') {
            tempLoading.style.display = 'none';
            tempMainSection.style.visibility = 'visible';
        }
    });
})();