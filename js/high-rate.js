
var tempHighRateID;
let tempRating;

function highRate(temp) {

    for (let q = 0; q < destinationObject.length; q++) {
        if (temp[0] === destinationObject[q].id) {
            tempRating = destinationObject[q].rating;
        }
    }

    for (let i = 1; i < temp.length; i++) {
        for (let j = 0; j < destinationObject.length; j++) {

            if (temp[i] === destinationObject[j].id) {
                let tempRatingX = destinationObject[j].rating;

                if (tempRating < tempRatingX) {
                    tempRating = tempRatingX;
                    tempHighRateID = destinationObject[j].id;
                }
            }
        }
    }
}


