
const setClickSeason = (function () {

    on('clickedSeason', function () {
        addListener('.', 'link-season', 'click', 'clickSeason');
    });

    let clickSeasonPrivate = function (tempSeason) {
        let tempIdArray = [];
        let tempNumberOfArray = 0;

        tempRightSection.innerHTML = '';

        if (tempSeason === 'all') {
            trigger('makeArrayId', {});
            trigger('hideBar', { });
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
            trigger('hideBar', { });
        }
    }

    on('clickSeason', function (event, tempData) {
        clickSeasonPrivate(tempData.data);
    })
})();



