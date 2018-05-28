window.addEventListener('load', arrayId);

let tempId = [];

function arrayId(){
    let x = 0;

    for (let i = 0; i < destinationObject.length; i++) {
        tempId[x] = destinationObject[i].id;
        x++;
    }
    highRate(tempId);
    addSection(tempId);
    addCity(tempId);
    setResolution();
    resizeGrid();
}