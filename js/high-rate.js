const highRate = (function () {
    let highRateID;
    let highRatePrivate = function (tempArray) {
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
                        highRateID = destinationObject[tempObjectLength].id;
                    }
                }
            }
        }
    };
    // trigger('highRateID', {data: highRateID});

    on('highRate', function (event, tempData){
        highRatePrivate(tempData.data); 
        
       
    });
   
    // on('highRateID', function(){
    //     return highRateID;
    // });

    return {
        get highId () {
            return highRateID;
        }
    };
})();
