const makeArrayId = (function () {
    let arrayIdPrivate = function (tempSeason) {
        let tempIdArray = [];
        let tempNumberOfArray = 0;
        if(tempSeason == 'all'){
            for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
                tempIdArray[tempNumberOfArray] = destinationObject[tempObjectLength].id;
                tempNumberOfArray++;
            }
        }
        else{
            for (let tempObjectLength in destinationObject) {
                let tempSeasonsArray = Object.keys(destinationObject[tempObjectLength].seasons);
                for (let tempSeasonsArrayLength in tempSeasonsArray) {
                    if (String(tempSeason) === String(tempSeasonsArray[tempSeasonsArrayLength])) {
                        tempIdArray[tempNumberOfArray] = destinationObject[tempObjectLength].id;
                        tempNumberOfArray++;
                    }
                }
            }

        }
        trigger('highRate', { data: tempIdArray });
    };

    on('makeArrayId', function (event, tempData) {
        arrayIdPrivate(tempData.season);
    });
})();

