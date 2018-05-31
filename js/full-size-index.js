
const fullSizeIndex = (function () {
    let indexPrivate = function (temp) {
        let tempclickedCity = document.getElementsByClassName('section-footer');
        for (let tempSectionFooterLength = 0; tempSectionFooterLength < tempclickedCity.length; tempSectionFooterLength++) {
            if (Number(temp) === Number(destinationObject[tempSectionFooterLength].id)) {
                window.open(`full-size.html?id=${temp}`, '_self');
            }
        }
    };

    let indexPublic = function (temp){
        indexPrivate(temp);
    };

    return{
        index: indexPublic
    };
})();
