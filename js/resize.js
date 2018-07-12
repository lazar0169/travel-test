
const resizeResolution = (function () {
    let body = get('body');
    let mainWrapper = get('#main-section');
    let width;
    let height;

    function setResolution() {
        let clientWidth = body[0].clientWidth;
        let clientHeight = body[0].clientHeight;
        let aspectRatio = clientWidth / clientHeight;
        width = clientWidth;
        height = clientHeight;

        if (clientWidth < clientHeight) {
            if (1 / aspectRatio > SCREEN_RESOLUTION) {
                let newHeight = width * SCREEN_RESOLUTION;
                mainWrapper.style.width = `${width}px`;
                mainWrapper.style.height = `${newHeight}px`;
                height = newHeight;
            }
            else {
                let newWidth = height * 1 / SCREEN_RESOLUTION;
                mainWrapper.style.height = `${height}px`;
                mainWrapper.style.width = `${newWidth}px`;
                width = newWidth;
            }
            trigger('resize/mobileView', { width: Math.ceil(width), height: Math.ceil(height) });
        }
        else {
            if (aspectRatio > SCREEN_RESOLUTION) {
                let newWidth = height * SCREEN_RESOLUTION;
                mainWrapper.style.width = `${newWidth}px`;
                mainWrapper.style.height = `${height}px`;
                width = newWidth;
            }
            else {
                let newHeight = width / SCREEN_RESOLUTION;
                mainWrapper.style.height = `${newHeight}px`;
                mainWrapper.style.width = `${width}px`;
                height = newHeight;
            }
            trigger('resize/desktopView', { width: Math.ceil(width), height: Math.ceil(height) });
        }
    };

    on('setResolution', function () {
        setResolution();
    });
})();