{var tempSeasons = document.getElementsByClassName('link-season');
for (let tempSeasonLength of tempSeasons) {
    tempSeasonLength.addEventListener('click', () => {
        let tempSeasonID = tempSeasonLength.dataset.season;
        clickSeason(tempSeasonID);
    });
}
}

function clickSeason(tempSeason) {
    let tempIdArray = [];
    let tempNumberOfArray = 0;
    let tempRightSection = document.getElementById('right-section');
    tempRightSection.innerHTML = '';

    if (tempSeason === 'all') {
        arrayId();
    }
    else {
        for (let tempObjectLength in destinationObject) {
            let tempSeasonsArray = Object.keys(destinationObject[tempObjectLength].seasons);
            for (let tempSeasonsArrayLength in tempSeasonsArray) {
                if (String(tempSeason) === String(tempSeasonsArray[tempSeasonsArrayLength])) {
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