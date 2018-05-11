let tempK;
    let tempJ;
    let j = 0;
    tempK = destinationObject[j].rating;
    for (j = 1; j < destinationObject.length; j++) {
        tempJ = destinationObject[j].rating;
        if (tempK < tempJ) {
            tempK = tempJ;
            tempText.innerHTML = destinationObject[j].desc;
            tempCity.innerHTML = destinationObject[j].name;
        }
    }