
const resizeResolution = (function () {
    let tempBody = get('body');
    let width;
    let height;

    function setResolutionPrivate() {
        let tempClientWidth = tempBody[0].clientWidth;
        let tempClientHeight = tempBody[0].clientHeight;
        let tempResolution = tempClientWidth / tempClientHeight;
        width = tempClientWidth;
        height = tempClientHeight;



        if (tempClientWidth < tempClientHeight) {
            trigger('resize/mobileView', { width: width, height: height, resolution: tempResolution });
        }
        else {
            trigger('resize/desktopView', { width: width, height: height, resolution: tempResolution });
        }
    };

    on('setResolution', function () {
        setResolutionPrivate();

    });
})();