window.addEventListener("load", arrayID);
let temparrayID = [];

function arrayID(){
    let x = 0;
    for (let i = 0; i < destinationObject.length; i++) {
        temparrayID[x] = destinationObject[i].id;
        x++;
    }
    addSection(temparrayID);
    addCity(temparrayID);
    setResolution();
}