const resizeFont = (function () {
    let tempH1FullScreenShow = get('#h1-full-screen-show');
    let tempParFullScreen = get('#p-full-screen');
    let tempH1tablePrice = get('.h1-table-price');
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
