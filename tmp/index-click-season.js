
const setClickSeason = (function () {
    let tempRightSection = get('#right-section');
    let clickSeasonPrivate = function (tempSeason) {

        tempRightSection.innerHTML = '';

        if (tempSeason === 'all') {
            trigger('makeArrayId', { season: tempSeason });
            trigger('hideBar', {});
        }

        else {

            trigger('makeArrayId', { season: tempSeason });
            trigger('hideBar', {});
        }
    }

    on('clickSeason', function (event, tempData) {
        clickSeasonPrivate(tempData.data);
    });
})();



