
const fullSizeIndex = (function () {
    let indexPrivate = function (temp) {
        window.open(`full-size.html?id=${temp}`, '_self');
    };
    
    on('fullSizeIndex', function (event, tempData) {
        indexPrivate(tempData.data);
    });
})();
