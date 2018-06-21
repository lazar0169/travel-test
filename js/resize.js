
const resizeResolution = (function () {
    let tempBody = get('body');
    let tempMainSection = get('#main-section');
    let width;
    let height;

   function setResolutionPrivate() {
        let tempClientWidth = tempBody[0].clientWidth;
        let tempClientHeight = tempBody[0].clientHeight;
        let tempResolution = tempClientWidth / tempClientHeight;

        if (tempResolution >= SCREEN_RESOLUTION) {
            let tempNewClientWidth = tempClientHeight * SCREEN_RESOLUTION;
            let tempNewClientWidthPx = `${tempNewClientWidth}px`;
            tempMainSection.style.width = tempNewClientWidthPx;
            tempMainSection.style.height = `${tempClientHeight}px`;
            width = tempNewClientWidth;
            height = tempClientHeight;
        }
        else {
            let tempNewClientHeight = tempClientWidth / SCREEN_RESOLUTION;
            let tempNewClientHeightPx = `${tempNewClientHeight}px`;
            tempMainSection.style.height = tempNewClientHeightPx;
            tempMainSection.style.width = `${tempClientWidth}px`;
            width = tempClientWidth;
            height = tempNewClientHeight;
        }

        if (tempClientWidth < tempClientHeight) {
            tempMainSection.style.width = `${tempClientWidth}px`;
            tempMainSection.style.height = `${tempClientHeight}px`;
            trigger('resize/mobileView', {});  
        }
        else {
            trigger('resize/desktopView', {});
        }
    };

    on('setResolution', function () {
        setResolutionPrivate();

    });
})();