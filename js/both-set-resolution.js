const resizeResolution = (function () {
    let tempBody = get('body');
    let tempLoading = get('#loading');
    let tempMainSection = get('#main-section');

    let setResolutionPrivate = function () {
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
    };

    on('setResolution', function () {
        setResolutionPrivate();
        if (tempMainSection.style.visibility != 'visible') {
            tempLoading.style.display = 'none';
            tempMainSection.style.visibility = 'visible';
        }
    });
})();