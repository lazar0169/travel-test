const resizeFont = (function () {

    let resizeFontPrivate = function () {
        let tempH1 = get('#', 'h1-full-screen-show');
        let tempP = get('#', 'p-full-screen');
        let tempH1tablePrice = get('.', 'h1-table-price');
        let tempTable = get('tag', 'table');
        let tempFont = tempH1.clientWidth;

        tempH1.style.fontSize = ` ${tempFont * 0.15}px`;
        tempP.style.fontSize = `${tempFont * 0.03}px`;

        for (let tempTableLength = 0; tempTableLength < tempH1tablePrice.length; tempTableLength++) {
            tempH1tablePrice[tempTableLength].style.fontSize = `${tempFont * 0.05}px`;
            tempTable[tempTableLength].style.fontSize = `${tempFont * 0.03}px`;
        }
    };
    
    on('resizeFont', function () {
        resizeFontPrivate();
    });
})();
