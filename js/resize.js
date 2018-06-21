
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
            if (1/tempResolution > SCREEN_RESOLUTION) {
                tempMainSection.style.width = `${width}px`;
                let tempNewHeight = width * SCREEN_RESOLUTION;        
                tempMainSection.style.height = `${tempNewHeight}px`;
            }
            else {   
                tempMainSection.style.height = `${height}px`;
                let tempNewWidth = height * 1/SCREEN_RESOLUTION;
                tempMainSection.style.width = `${tempNewWidth}px`;
            }
            trigger('resize/mobileView', { width: width, height: height, resolution: tempResolution });
        }
        else {
            if (tempResolution > SCREEN_RESOLUTION) {
                let tempNewClientWidth = height * SCREEN_RESOLUTION;
                tempMainSection.style.width = `${tempNewClientWidth}px`;
                tempMainSection.style.height = `${height}px`;
            }
            else {
                let tempNewClientHeight = width / SCREEN_RESOLUTION;
                tempMainSection.style.height = `${tempNewClientHeight}px`;
                tempMainSection.style.width = `${width}px`;
            }

            trigger('resize/desktopView', { width: width, height: height, resolution: tempResolution });
        }
    };

    on('setResolution', function () {
        setResolution();

    });
})();