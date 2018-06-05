const makeArrayId = (function () {
    let arrayIdPrivate = function () {
        let tempIdArray = [];
        let tempNumberOfArray = 0;
        for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
            tempIdArray[tempNumberOfArray] = destinationObject[tempObjectLength].id;
            tempNumberOfArray++;
        }
        
        trigger('highRate', { data: tempIdArray});
        makeSection.addSection(tempIdArray);
        makeCity.addCity(tempIdArray);


    };

    return {
        arrayId: arrayIdPrivate
    };
})();

