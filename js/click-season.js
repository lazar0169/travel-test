var tempSeasons = document.getElementsByClassName('link-season');
for (let tempSeasonLength = 0; tempSeasonLength < tempSeasons.length; tempSeasonLength++) {
    tempSeasons[tempSeasonLength].addEventListener('click', clickSeason);
}

function clickSeason() {
    let tempIdArray = [];
    let tempNumberOfArray = 0;
    let tempRightSection = document.getElementById('right-section');
    tempRightSection.innerHTML = '';
    let tempSeasonID = this.dataset.season;

    if (tempSeasonID === 'all') {
        arrayId();
    }
    else {
        for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
            let tempSeasonsArray = Object.keys(destinationObject[tempObjectLength].seasons);
            for (let tempSeasonsArrayLength = 0; tempSeasonsArrayLength < tempSeasonsArray.length; tempSeasonsArrayLength++) {
                if (String(tempSeasonID) === String(tempSeasonsArray[tempSeasonsArrayLength])) {
                    tempIdArray[tempNumberOfArray] = destinationObject[tempObjectLength].id;
                    tempNumberOfArray++;
                }
            }
        }
        highRate(tempIdArray);
        addSection(tempIdArray);
        addCity(tempIdArray);
        setResolution();
        resizeGrid();
        
    }
}