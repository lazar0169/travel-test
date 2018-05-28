window.addEventListener('load', arrayId);




function arrayId(){
    let tempIdArray = [];
    let tempNumberOfArray = 0;
    for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
        tempIdArray[tempNumberOfArray] = destinationObject[tempObjectLength].id;
        tempNumberOfArray++;
    }
    highRate(tempIdArray);
    addSection(tempIdArray);
    addCity(tempIdArray);
    setResolution();
    resizeGrid();
}