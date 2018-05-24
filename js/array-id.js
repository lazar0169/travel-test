window.addEventListener("load", arrayID);
let tempID = [];

function arrayID(){
    let x = 0;
    for (let i = 0; i < destinationObject.length; i++) {
        tempID[x] = destinationObject[i].id;
        x++;
    }
    highRate(tempID);
    addSection(tempID);
    addCity(tempID);
    setResolution();
    resizeGrid();
}