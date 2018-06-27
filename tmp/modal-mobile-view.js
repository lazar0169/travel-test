const view = (function () {
    let tempTable = get('#table-div');
    let tempMainSection = get('#main-section');
    let tempImage = get('#image-modal');
    let tempH1 = get('#h1-modal-show');
    let tempPar = get('#p-modal');
    let mobileView = function () {
        tempMainSection.id = 'main-section-mobile';
        tempH1.id = 'h1-modal-show-mobile';
        tempImage.id = 'image-modal-mobile';
        tempPar.id = 'p-modal-mobile';
        tempTable.id = 'table-div-mobile';
        trigger('resizeFont', {});
    };

    let desktopView = function () {
        tempMainSection.id = 'main-section';
        tempH1.id = 'h1-modal-show';
        tempImage.id = 'image-modal';
        tempPar.id = 'p-modal';
        tempTable.id = 'table-div';
        trigger('resizeFont', {})
    };
    on('resize/mobileView', function (event, tempData) {
        mobileView(tempData.data);
    });

    on('resize/desktopView', function (event, tempData) {
        desktopView(tempData.data);
    });
})();
