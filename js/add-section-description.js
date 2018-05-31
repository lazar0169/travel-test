const makeCity = (function () {
    let addCityPrivate = function (temp) {
        let tempData = document.getElementsByClassName('article-section');
        let tempCityNameHeader = document.getElementsByClassName('h2-city-name-header');
        let tempCityNamePar = document.getElementsByClassName('description-text');
        let tempSectionNumber = 1;

        for (let tempIdArray in temp) {
            for (let tempObjectLength in destinationObject) {
                if (temp[tempIdArray] === destinationObject[tempObjectLength].id) {
                    if (highRate.highId().highRateID != destinationObject[tempObjectLength].id) {
                        tempData[tempSectionNumber].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                        tempCityNameHeader[tempSectionNumber].innerText = destinationObject[tempObjectLength].name;
                        tempCityNamePar[tempSectionNumber].innerText = destinationObject[tempObjectLength].desc;
                        tempData[tempSectionNumber].setAttribute('data-id', destinationObject[tempObjectLength].id);
                        tempSectionNumber++;
                    }
                    else {
                        tempData[0].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                        tempCityNameHeader[0].innerText = destinationObject[tempObjectLength].name;
                        tempCityNamePar[0].innerText = destinationObject[tempObjectLength].desc;
                        tempData[0].setAttribute('data-id', destinationObject[tempObjectLength].id);
                    }
                }
            }
        }
    };
    let addCityPublic = function (temp) {
        addCityPrivate(temp);
    };

    return {
        addCity: addCityPublic
    };
})();

