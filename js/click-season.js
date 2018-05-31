window.addEventListener('load', () => {
    setClickSeason.clickedSeason();
});

const setClickSeason = (function () {

    let setClickSeasonPrivate = function () {
        let tempSeasons = document.getElementsByClassName('link-season');
        for (let tempSeasonLength of tempSeasons) {
            tempSeasonLength.addEventListener('click', () => {
                let tempSeasonID = tempSeasonLength.dataset.season;
                chosenSeason.clickSeason(tempSeasonID);
            });
        }
    };

    let setClickSeasonPublic = function () {
        setClickSeasonPrivate();
    }

    return {
        clickedSeason: setClickSeasonPublic,
    };
})();

const chosenSeason = (function () {
    let clickSeasonPrivate = function (tempSeason) {
        let tempIdArray = [];
        let tempNumberOfArray = 0;
        let tempRightSection = document.getElementById('right-section');
        tempRightSection.innerHTML = '';

        if (tempSeason === 'all') {
            makeArrayId.arrayId();
            resizeGrid.setResizeGrid();
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
            highRate.highRateId(tempIdArray);
            makeSection.addSection(tempIdArray);
            makeCity.addCity(tempIdArray);
            resizeResolution.setResolution();
            resizeGrid.setResizeGrid();
        }
    }

    let clickSeasonPublic = function (tempSeason) {
        clickSeasonPrivate(tempSeason);
    };

    return {
        clickSeason: clickSeasonPublic
    };

})();
