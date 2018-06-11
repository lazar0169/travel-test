const resizeFont = (function () {

    let resizeFontPrivate = function () {


        let tempFont = tempH1FullScreenShow.clientWidth;

        tempH1FullScreenShow.style.fontSize = ` ${tempFont * 0.15}px`;
        tempParFullScreen.style.fontSize = `${tempFont * 0.03}px`;

        for (let tempTableLength = 0; tempTableLength < tempH1tablePrice.length; tempTableLength++) {
            tempH1tablePrice[tempTableLength].style.fontSize = `${tempFont * 0.05}px`;
            tempTable[tempTableLength].style.fontSize = `${tempFont * 0.03}px`;
        }
    };

    on('resizeFont', function () {
        resizeFontPrivate();
    });
})();
