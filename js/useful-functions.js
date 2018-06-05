function get(tempSelector, tempName) {
    if (tempSelector === '#') {
        return document.getElementById(tempName);
    }
    else if (tempSelector === '.') {
        return document.getElementsByClassName(tempName);
    }
    else {
        return document.getElementsByTagName(tempName);
    }

}
function addListener(tempSelector,tempName, tempEvent, tempFunction ) {
    get(tempSelector, tempName).addEventListener(tempEvent, ()=>{
        tempFunction();
    });

}

function addListenerData(tempSelector, tempName, tempEvent, tempFunction) {
    let tempDiv = get(tempSelector, tempName);
    for (let tempDivLenght of tempDiv)
        tempDivLenght.addEventListener(tempEvent, () => {
            tempFunction(tempDivLenght.dataset.id);
        });


}

function windowListener(tempEvent, tempFunction) {
    window.addEventListener(tempEvent, () => {
        tempFunction();
    });
}