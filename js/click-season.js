
const setClickSeason = (function () {

    let setClickedSeasonPrivate = function () {

        addListenerData('.', 'link-season', 'click', setClickSeason.clickSeason);
    };

    let clickSeasonPrivate = function (tempSeason) {
        let tempIdArray = [];
        let tempNumberOfArray = 0;
        let tempRightSection = get('#', 'right-section');
        tempRightSection.innerHTML = '';

        if (tempSeason === 'all') {
            makeArrayId.arrayId();
            trigger('resizeGrid', { });
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
            trigger('highRate', { data: tempIdArray});
            makeSection.addSection(tempIdArray);
            makeCity.addCity(tempIdArray);
            trigger('resizeGrid', { });  

        }
    }

return {
    clickedSeason: setClickedSeasonPrivate,
    clickSeason: clickSeasonPrivate
};
})();



