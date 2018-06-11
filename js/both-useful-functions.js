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
};

function addListener(tempSelector, tempName, tempEvent, tempFunction) {
    let tempDiv = get(tempSelector, tempName);
    if(tempSelector === '#'){
        tempDiv.addEventListener(tempEvent, ()=>{
            trigger(tempFunction, {});
        });
    }
    
    else{ 
        for (let tempDivLength of tempDiv)
            tempDivLength.addEventListener(tempEvent, () => {
                trigger(tempFunction, {data: tempDivLength.dataset.id});
            });
    }
};

function windowListener(tempEvent, tempFunction) {
    window.addEventListener(tempEvent, () => {
        tempFunction();
    });
}