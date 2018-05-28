
var tempHighRateID;

function highRate(tempArray) {
    
    let tempRating;
    for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
        if (tempArray[0] === destinationObject[tempObjectLength].id) {
            tempRating = destinationObject[tempObjectLength].rating;
        }
    }

    for (let tempNumberOfArray = 1; tempNumberOfArray < tempArray.length; tempNumberOfArray++) {
        for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {

            if (tempArray[tempNumberOfArray] === destinationObject[tempObjectLength].id) {
                let tempRatingX = destinationObject[tempObjectLength].rating;

                if (tempRating < tempRatingX) {
                    tempRating = tempRatingX;
                    tempHighRateID = destinationObject[tempObjectLength].id;
                }
            }
        }
    }
}


