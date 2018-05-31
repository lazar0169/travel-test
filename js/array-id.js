const makeArrayId = (function () {
    let arrayIdPrivate = function () {
        let tempIdArray = [];
        let tempNumberOfArray = 0;
        for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
            tempIdArray[tempNumberOfArray] = destinationObject[tempObjectLength].id;
            tempNumberOfArray++;
        }
        highRate.highRateId(tempIdArray);
        makeSection.addSection(tempIdArray);
        makeCity.addCity(tempIdArray);
    };

    let arrayIdPublic = function () {
        arrayIdPrivate();
    };

    return {
        arrayId: arrayIdPublic
    };
})();

