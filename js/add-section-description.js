
function addCity(temp) {
    let tempData = document.getElementsByClassName("articleSection");
    let tempcityNameHeader = document.getElementsByClassName("h2cityNameHeader");
    let tempcityNamePar = document.getElementsByClassName("descriptionText");
    let tempX = 1;

    for (let i = 0; i < temp.length; i++) {
        for (let k = 0; k < destinationObject.length; k++){
            if (temp[i] == destinationObject[k].id) {
                if (temphighRateID != destinationObject[k].id) {
                    tempData[tempX].style.backgroundImage = destinationObject[k].picture;
                    tempcityNameHeader[tempX].innerText = destinationObject[k].name;
                    tempcityNamePar[tempX].innerText = destinationObject[k].desc;
                    tempData[tempX].setAttribute("data-id", destinationObject[k].id);
                    tempX++;
                }
                else {
                    tempData[0].style.backgroundImage = destinationObject[k].picture;
                    tempcityNameHeader[0].innerText = destinationObject[k].name;
                    tempcityNamePar[0].innerText = destinationObject[k].desc;
                    tempData[0].setAttribute("data-id", destinationObject[k].id);

                }
            }

        }
            

    }
}
