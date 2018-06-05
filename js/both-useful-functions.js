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

function addListener(tempSelector, tempName, tempEvent, tempFunction) {
    let tempDiv = get(tempSelector, tempName);
    if(tempSelector === '#'){
        tempDiv.addEventListener(tempEvent, ()=>{
            trigger(tempFunction, {});
        });
    }
    else{ 
        for (let tempDivLenght of tempDiv)
            tempDivLenght.addEventListener(tempEvent, () => {
                trigger(tempFunction, {data: tempDivLenght.dataset.id});
            });
    }
}

function windowListener(tempEvent, tempFunction) {
    window.addEventListener(tempEvent, () => {
        tempFunction();
    });
}