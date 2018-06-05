
const setClickSeason = (function () {

    on('clickedSeason', function () {
        addListener('.', 'link-season', 'click', 'clickSeason');
    });

    let clickSeasonPrivate = function (tempSeason) {
        let tempIdArray = [];
        let tempNumberOfArray = 0;
        let tempRightSection = get('#', 'right-section');
        tempRightSection.innerHTML = '';

        if (tempSeason === 'all') {
            trigger('makeArrayId', {});
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
            trigger('highRate', { data: tempIdArray });

        }
    }

    on('clickSeason', function (event, tempData) {
        clickSeasonPrivate(tempData.data);
    })


})();



