
function addCity(temp) {
    let tempData = document.getElementsByClassName('article-section');
    let tempCityNameHeader = document.getElementsByClassName('h2-city-name-header');
    let tempCityNamePar = document.getElementsByClassName('description-text');
    let tempSectionNumber = 1;
    
    for (let tempIdArray = 0; tempIdArray < temp.length; tempIdArray++) {
        for (let tempObjectLength = 0; tempObjectLength < destinationObject.length;tempObjectLength++) {
            if (temp[tempIdArray] === destinationObject[tempObjectLength].id) {
                if (tempHighRateID != destinationObject[tempObjectLength].id) {
                    tempData[tempSectionNumber].style.backgroundImage = destinationObject[tempObjectLength].picture;
                    tempCityNameHeader[tempSectionNumber].innerText = destinationObject[tempObjectLength].name;
                    tempCityNamePar[tempSectionNumber].innerText = destinationObject[tempObjectLength].desc;
                    tempData[tempSectionNumber].setAttribute('data-id', destinationObject[tempObjectLength].id);
                    tempSectionNumber++;
                }
                else {
                    tempData[0].style.backgroundImage = destinationObject[tempObjectLength].picture;
                    tempCityNameHeader[0].innerText = destinationObject[tempObjectLength].name;
                    tempCityNamePar[0].innerText = destinationObject[tempObjectLength].desc;
                    tempData[0].setAttribute('data-id', destinationObject[tempObjectLength].id);
                }
            }
        }
    }
}
