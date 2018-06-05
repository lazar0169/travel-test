const resizeResolution = (function () {
    let width, height;

    let setResolutionPrivate = function () {
        let tempBody = get('tag', 'body');
        let tempMainSection = get('#', 'main-section');
        let tempClientWidth = tempBody[0].clientWidth;
        let tempClientHeight = tempBody[0].clientHeight;
        let tempResolution = tempClientWidth / tempClientHeight;

        if (tempResolution >= SCREEN_RESOLUTION) {
            let tempNewClientWidth = tempClientHeight * SCREEN_RESOLUTION;
            let tempNewClientWidthPx = `${tempNewClientWidth}px`;
            tempMainSection.style.width = tempNewClientWidthPx;
            tempMainSection.style.height = `${tempClientHeight}px`;
        }
        else {
            let tempNewClientHeight = tempClientWidth / SCREEN_RESOLUTION
            let tempNewClientHeightPx = `${tempNewClientHeight}px`;
            width = tempClientWidth;
            height = tempNewClientHeight;
            tempMainSection.style.height = tempNewClientHeightPx;
            tempMainSection.style.width = `${tempClientWidth}px`;
        }
    };
    on('setResolution', function () {
        setResolutionPrivate();
    });
})();