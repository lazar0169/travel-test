const modalIndex = (function () {
    let indexPrivate = function (temp) {
        window.open(`full-size.html?id=${temp}`, '_self');
    };

    on('modalIndex', function (event, tempData) {
        indexPrivate(tempData.data);
    });
})();
