window.addEventListener("load", highRate);

let tempRatingX
let tempObjMove;
let tempObjX
var temophighRate

function highRate() {
    let tempObj = destinationObject[0];
    let tempRating = destinationObject[0].rating;

    for (let i = 1; i < destinationObject.length; i++) {
        tempRatingX = destinationObject[i].rating;

        if (tempRating < tempRatingX) {
            tempRating = tempRatingX;
            temphighRateID = destinationObject[i].id;
        }
    }
}


