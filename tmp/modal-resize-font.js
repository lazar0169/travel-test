const resizeFont = (function () {
    let tempBody = get('body');
    let tempH1FullScreenShow = get('#h1-modal-show');
    let tempParFullScreen = get('#p-modal');
    let tempH1tablePrice = get('.h1-table-price');
    let resizeFontPrivate = function () {
        let tempFont = tempBody[0].clientHeight;
        tempH1FullScreenShow.style.fontSize = ` ${tempFont * 0.1}px`;
        tempParFullScreen.style.fontSize = `${tempFont * 0.025}px`;

        for (let tempTableLength = 0; tempTableLength < tempH1tablePrice.length; tempTableLength++) {
            tempH1tablePrice[tempTableLength].style.fontSize = `${tempFont * 0.05}px`;
        }
    };

    on('resizeFont', function () {
        resizeFontPrivate();
    });
})();
