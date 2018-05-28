
function addCity(temp) {
    let tempData = document.getElementsByClassName('article-section');
    let tempCityNameHeader = document.getElementsByClassName('h2-city-name-header');
    let tempCityNamePar = document.getElementsByClassName('description-text');
    let tempX = 1;
    
    for (let i = 0; i < temp.length; i++) {
        for (let k = 0; k < destinationObject.length; k++) {
            if (temp[i] === destinationObject[k].id) {
                if (tempHighRateID != destinationObject[k].id) {
                    tempData[tempX].style.backgroundImage = destinationObject[k].picture;
                    tempCityNameHeader[tempX].innerText = destinationObject[k].name;
                    tempCityNamePar[tempX].innerText = destinationObject[k].desc;
                    tempData[tempX].setAttribute('data-id', destinationObject[k].id);
                    tempX++;
                }
                else {
                    tempData[0].style.backgroundImage = destinationObject[k].picture;
                    tempCityNameHeader[0].innerText = destinationObject[k].name;
                    tempCityNamePar[0].innerText = destinationObject[k].desc;
                    tempData[0].setAttribute('data-id', destinationObject[k].id);
                }
            }
        }
    }
}
