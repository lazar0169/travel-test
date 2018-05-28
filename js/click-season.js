var tempSeasons = document.getElementsByClassName('link-season');
for (let i = 0; i < tempSeasons.length; i++) {
    tempSeasons[i].addEventListener('click', clickSeason);
}

function clickSeason() {
    let tempIdArray = [];
    let x = 0;
    let tempRightSection = document.getElementById('right-section');
    tempRightSection.innerHTML = '';
    let tempSeasonID = this.dataset.season;

    if (tempSeasonID === 'all') {
        arrayId();
    }
    else {
        for (let i = 0; i < destinationObject.length; i++) {
            let tempSeasonsArray = Object.keys(destinationObject[i].seasons);
            for (let j = 0; j < tempSeasonsArray.length; j++) {
                if (tempSeasonID === tempSeasonsArray[j]) {
                    tempIdArray[x] = destinationObject[i].id;
                    x++;
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