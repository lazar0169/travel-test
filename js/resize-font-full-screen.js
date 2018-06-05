

const resizeFont = (function () {

    let resizeFontPrivate = function () {
        let tempH1 = get('#', 'h1-full-screen-show');
        let tempP = get('#', 'p-full-screen');
        let tempH1tablePrice = get('.', 'h1-table-price');
        let tempTable = get('tag', 'table');
        let tempFont = tempH1.clientWidth;
        tempH1.style.fontSize = ` ${tempFont * 0.15}px`;
        tempP.style.fontSize = `${tempFont * 0.03}px`;
        for (let tempTableLenght = 0; tempTableLenght < tempH1tablePrice.length; tempTableLenght++) {
            tempH1tablePrice[tempTableLenght].style.fontSize = `${tempFont * 0.05}px`;
            tempTable[tempTableLenght].style.fontSize = `${tempFont * 0.03}px`;
        }
    };
    on('resizeFont', function (event, data) {
        resizeFontPrivate();
    });


})();
windowListener('load', function (){
    trigger('setResolution', { })
});
windowListener('load', function (){
    trigger('resizeFont', { })
});
windowListener('resize', function (){
    trigger('setResolution', { })
});
windowListener('resize', function (){
    trigger('resizeFont', { })
});;