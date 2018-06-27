
const resizeResolution = (function () {
    let tempBody = get('body');
    let tempMainSection = get('#main-section');
    let width;
    let height;

    function setResolution() {
        let tempClientWidth = tempBody[0].clientWidth;
        let tempClientHeight = tempBody[0].clientHeight;
        let tempResolution = tempClientWidth / tempClientHeight;
        width = tempClientWidth;
        height = tempClientHeight;

        if (tempClientWidth < tempClientHeight) {
            if (1 / tempResolution > SCREEN_RESOLUTION) {
                let tempNewHeight = width * SCREEN_RESOLUTION;
                tempMainSection.style.width = `${width}px`;
                tempMainSection.style.height = `${tempNewHeight}px`;
                height = tempNewHeight;
            }
            else {
                let tempNewWidth = height * 1 / SCREEN_RESOLUTION;
                tempMainSection.style.height = `${height}px`;
                tempMainSection.style.width = `${tempNewWidth}px`;
                width = tempNewWidth;
            }
            trigger('resize/mobileView', { width: width, height: height });
        }
        else {
            if (tempResolution > SCREEN_RESOLUTION) {
                let tempNewWidth = height * SCREEN_RESOLUTION;
                tempMainSection.style.width = `${tempNewWidth}px`;
                tempMainSection.style.height = `${height}px`;
                width = tempNewWidth;
            }
            else {
                let tempNewHeight = width / SCREEN_RESOLUTION;
                tempMainSection.style.height = `${tempNewHeight}px`;
                tempMainSection.style.width = `${width}px`;
                height = tempNewHeight;
            }
            trigger('resize/desktopView', { width: width, height: height });
        }
    };

    on('setResolution', function () {
        setResolution();

    });
})();