window.addEventListener("load", addCity);
function addCity() {
    let tempData = document.getElementsByClassName("articleSection");
    let tempcityNameHeader = document.getElementsByClassName("h2cityNameHeader");
    let tempcityNamePar = document.getElementsByClassName("descriptionText");
    let tempX = 1;

    for (let i = 0; i < destinationObject.length; i++) {
        if (temphighRateID != destinationObject[i].id) {
            tempData[tempX].style.backgroundImage = destinationObject[i].picture;
            tempcityNameHeader[tempX].innerText = destinationObject[i].name;
            tempcityNamePar[tempX].innerText = destinationObject[i].desc;
            tempData[tempX].setAttribute("data-id", destinationObject[i].id);
            tempX++;
        }
        else {
            tempData[0].style.backgroundImage = destinationObject[i].picture;
            tempcityNameHeader[0].innerText = destinationObject[i].name;
            tempcityNamePar[0].innerText = destinationObject[i].desc;
            tempData[0].setAttribute("data-id", destinationObject[i].id);

        }
    }
}
