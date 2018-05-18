window.addEventListener("load", highRate);

let tempRatingX
let tempObjMove;
let tempObjX

function highRate() {
    let tempObj = destinationObject[0];
    let tempRating = destinationObject[0].rating;

    for (let i = 1; i < destinationObject.length; i++) {
        tempRatingX = destinationObject[i].rating;

        if (tempRating < tempRatingX) {
            tempRating = tempRatingX;
            tempObjX = destinationObject[i];
            tempObjMove = tempObjX;
            tempObjX = tempObj;
            tempObj = tempObjMove;
            destinationObject[i] = tempObjX;
            destinationObject[0] = tempObj;
        }
    }
}


