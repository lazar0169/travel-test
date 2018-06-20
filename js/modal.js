const makeModal = (function () {
    let tempImageFullScreen = get('#image-modal');
    let tempTableDiv = get('#table-div');
    let tempH1FullScreenShow = get('#h1-modal-show');
    let tempParFullScreen = get('#p-modal');
    let modal = function () {

        let maxJan;
        let maxFeb;
        let maxMarch;
        let maxMay;
        let maxApril;
        let maxJune;
        let maxJuly;
        let maxAugust;
        let maxSep;
        let maxOct;
        let maxNov;
        let maxDec;

        let params = new URLSearchParams(document.location.search.substring(1));
        let tempDataID = params.get('id');

        for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
            if (Number(tempDataID) === destinationObject[tempObjectLength].id) {
                let tempSeasons = Object.keys(destinationObject[tempObjectLength].seasons);

                tempH1FullScreenShow.innerText = destinationObject[tempObjectLength].name;
                tempImageFullScreen.src = destinationObject[tempObjectLength].image;
                tempParFullScreen.innerText = destinationObject[tempObjectLength].desc;

                for (let tempSeasonLength = 0; tempSeasonLength < tempSeasons.length; tempSeasonLength++) {
                    let tempParSeason = document.createElement('h1');
                    tempParSeason.className = 'h1-table-price';
                    let temptablePrice = document.createElement('table');
                    if (tempSeasons[tempSeasonLength] === 'spring') {
                        let maxValue;
                        let tempSpring = Object.keys(destinationObject[tempObjectLength].seasons.spring);
                        maxMarch = destinationObject[tempObjectLength].seasons.spring.March.length;
                        maxApril = destinationObject[tempObjectLength].seasons.spring.April.length;
                        maxMay = destinationObject[tempObjectLength].seasons.spring.May.length;
                        if (maxMarch > maxApril && maxMarch > maxMay) {
                            maxValue = maxMarch;
                        }
                        else if (maxApril > maxMay) {
                            maxValue = maxApril
                        }
                        else {
                            maxValue = maxMay;
                        }
                        for (let tempSpringLength = 0; tempSpringLength <= maxValue; tempSpringLength++) {
                            let temptablePriceTR = document.createElement('tr');
                            for (let spring = 0; spring < tempSpring.length; spring++) {
                                tempParSeason.innerText = tempSeasons[tempSeasonLength];
                                let temptablePriceTDSpring = document.createElement('td');

                                if (tempSpringLength === 0) {
                                    temptablePriceTDSpring.innerText = tempSpring[spring];
                                }
                                else {
                                    temptablePriceTDSpring.innerText = destinationObject[tempObjectLength].seasons.spring[tempSpring[spring]][tempSpringLength - 1];
                                }
                                if (temptablePriceTDSpring.textContent !== 'undefined') {
                                    temptablePriceTR.appendChild(temptablePriceTDSpring);
                                }
                                else {
                                    temptablePriceTDSpring.innerText = '/';
                                    temptablePriceTR.appendChild(temptablePriceTDSpring);
                                }
                            }
                            temptablePrice.appendChild(temptablePriceTR);
                        }
                    }

                    else if (tempSeasons[tempSeasonLength] === 'summer') {
                        let maxValue;
                        let tempSummer = Object.keys(destinationObject[tempObjectLength].seasons.summer);

                        maxJune = destinationObject[tempObjectLength].seasons.summer.June.length;
                        maxJuly = destinationObject[tempObjectLength].seasons.summer.July.length;
                        maxAugust = destinationObject[tempObjectLength].seasons.summer.August.length;

                        if (maxJune > maxJuly && maxJune > maxAugust) {
                            maxValue = maxJune;
                        }
                        else if (maxJuly > maxAugust) {
                            maxValue = maxJuly
                        }
                        else {
                            maxValue = maxAugust;
                        }
                        for (let tempSummerLength = 0; tempSummerLength <= maxValue; tempSummerLength++) {
                            let temptablePriceTR = document.createElement('tr');

                            for (let summer = 0; summer < tempSummer.length; summer++) {
                                tempParSeason.innerText = tempSeasons[tempSeasonLength];
                                let temptablePriceTDSummer = document.createElement('td');

                                if (tempSummerLength === 0) {
                                    temptablePriceTDSummer.innerText = tempSummer[summer];
                                }
                                else {
                                    temptablePriceTDSummer.innerText = destinationObject[tempObjectLength].seasons.summer[tempSummer[summer]][tempSummerLength - 1];
                                }
                                if (temptablePriceTDSummer.textContent != 'undefined') {
                                    temptablePriceTR.appendChild(temptablePriceTDSummer);
                                }
                                else {
                                    temptablePriceTDSummer.innerText = '/'
                                    temptablePriceTR.appendChild(temptablePriceTDSummer);
                                }
                            }
                            temptablePrice.appendChild(temptablePriceTR);
                        }
                    }

                    else if (tempSeasons[tempSeasonLength] === 'autumn') {
                        let maxValue;
                        let tempAutumn = Object.keys(destinationObject[tempObjectLength].seasons.autumn);

                        maxSep = destinationObject[tempObjectLength].seasons.autumn.September.length;
                        maxOct = destinationObject[tempObjectLength].seasons.autumn.October.length;
                        maxNov = destinationObject[tempObjectLength].seasons.autumn.November.length;

                        if (maxSep > maxOct && maxSep > maxNov) {
                            maxValue = maxSep;
                        }
                        else if (maxOct > maxNov) {
                            maxValue = maxOct
                        }
                        else {
                            maxValue = maxNov;
                        }
                        for (let tempAutumnLength = 0; tempAutumnLength <= maxValue; tempAutumnLength++) {
                            let temptablePriceTR = document.createElement('tr');

                            for (let autumn = 0; autumn < tempAutumn.length; autumn++) {
                                tempParSeason.innerText = tempSeasons[tempSeasonLength];
                                let temptablePriceTDAutumn = document.createElement('td');

                                if (tempAutumnLength === 0) {
                                    temptablePriceTDAutumn.innerText = tempAutumn[autumn];
                                }
                                else {
                                    temptablePriceTDAutumn.innerText = destinationObject[tempObjectLength].seasons.autumn[tempAutumn[autumn]][tempAutumnLength - 1];
                                }
                                if (temptablePriceTDAutumn.textContent !== 'undefined') {
                                    temptablePriceTR.appendChild(temptablePriceTDAutumn);
                                }
                                else {
                                    temptablePriceTDAutumn.innerText = '/';
                                    temptablePriceTR.appendChild(temptablePriceTDAutumn);
                                }
                            }
                            temptablePrice.appendChild(temptablePriceTR);
                        }
                    }

                    else if (tempSeasons[tempSeasonLength] === 'winter') {
                        let maxValue;
                        let tempWinter = Object.keys(destinationObject[tempObjectLength].seasons.winter);

                        maxJan = destinationObject[tempObjectLength].seasons.winter.January.length;
                        maxFeb = destinationObject[tempObjectLength].seasons.winter.February.length;
                        maxDec = destinationObject[tempObjectLength].seasons.winter.December.length;

                        if (maxJan > maxFeb && maxJan > maxMarch) {
                            maxValue = maxJan;
                        }
                        else if (maxFeb > maxDec) {
                            maxValue = maxFeb
                        }
                        else {
                            maxValue = maxDec;
                        }
                        for (let tempWinterLength = 0; tempWinterLength <= maxValue; tempWinterLength++) {
                            let temptablePriceTR = document.createElement('tr');

                            for (let winter = 0; winter < tempWinter.length; winter++) {
                                tempParSeason.innerText = tempSeasons[tempSeasonLength];
                                let temptablePriceTDWinter = document.createElement('td');

                                if (tempWinterLength === 0) {
                                    temptablePriceTDWinter.innerText = tempWinter[winter];
                                }
                                else {
                                    temptablePriceTDWinter.innerText = destinationObject[tempObjectLength].seasons.winter[tempWinter[winter]][tempWinterLength - 1];
                                }
                                if (temptablePriceTDWinter.textContent !== 'undefined') {
                                    temptablePriceTR.appendChild(temptablePriceTDWinter);
                                }
                                else {
                                    temptablePriceTDWinter.innerText = '/';
                                    temptablePriceTR.appendChild(temptablePriceTDWinter);
                                }
                            }
                            temptablePrice.appendChild(temptablePriceTR);
                        }
                    }
                    tempTableDiv.appendChild(tempParSeason)
                    tempTableDiv.appendChild(temptablePrice);
                }
            }
        }
    };

    on('modal', function () {
        modal();
    })
})();

