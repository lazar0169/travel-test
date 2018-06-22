const makeModal = (function () {
    let tempTable = get('#table-div');
    let tempMainSection = get('#main-section');
    let tempImage = get('#image-modal');
    let tempH1 = get('#h1-modal-show');
    let tempPar = get('#p-modal');
    let tempBody = get('body');
    let tempH1tablePrice = get('.h1-table-price');
    let tempLoading = get('#loading');
    function modal() {

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

        let maxValue;
        
        let SEASONSLIST = {
            spring: 'spring',
            winter: 'winter',
            autumn: 'autumn',
            summer: 'summer'
        }

        let params = new URLSearchParams(document.location.search.substring(1));
        let tempDataID = params.get('id');

        for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
            if (Number(tempDataID) === destinationObject[tempObjectLength].id) {
                let tempSeasons = Object.keys(destinationObject[tempObjectLength].seasons);

                tempH1.innerText = destinationObject[tempObjectLength].name;
                tempImage.src = destinationObject[tempObjectLength].image;
                tempPar.innerText = destinationObject[tempObjectLength].desc;

                for (let tempSeasonLength in tempSeasons) {
                    let tempParSeason = document.createElement('h1');
                    tempParSeason.classList.add('h1-table-price');
                    let tempTablePrice = document.createElement('table');
                    let tempSeasonName = String(tempSeasons[tempSeasonLength]);
                    switch (tempSeasonName) {
                        case SEASONSLIST.spring:

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
                                let tempTablePriceTR = document.createElement('tr');
                                for (let spring = 0; spring < tempSpring.length; spring++) {
                                    tempParSeason.innerText = tempSeasons[tempSeasonLength];
                                    let tempTablePriceTDSpring = document.createElement('td');

                                    if (tempSpringLength === 0) {
                                        tempTablePriceTDSpring.innerText = tempSpring[spring];
                                    }
                                    else {
                                        tempTablePriceTDSpring.innerText = destinationObject[tempObjectLength].seasons.spring[tempSpring[spring]][tempSpringLength - 1];
                                    }
                                    if (tempTablePriceTDSpring.textContent !== 'undefined') {
                                        tempTablePriceTR.appendChild(tempTablePriceTDSpring);
                                    }
                                    else {
                                        tempTablePriceTDSpring.innerText = '/';
                                        tempTablePriceTR.appendChild(tempTablePriceTDSpring);
                                    }
                                }
                                tempTablePrice.appendChild(tempTablePriceTR);
                            }
                            break;

                        case SEASONSLIST.summer:
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
                                let tempTablePriceTR = document.createElement('tr');

                                for (let summer = 0; summer < tempSummer.length; summer++) {
                                    tempParSeason.innerText = tempSeasons[tempSeasonLength];
                                    let tempTablePriceTDSummer = document.createElement('td');

                                    if (tempSummerLength === 0) {
                                        tempTablePriceTDSummer.innerText = tempSummer[summer];
                                    }
                                    else {
                                        tempTablePriceTDSummer.innerText = destinationObject[tempObjectLength].seasons.summer[tempSummer[summer]][tempSummerLength - 1];
                                    }
                                    if (tempTablePriceTDSummer.textContent != 'undefined') {
                                        tempTablePriceTR.appendChild(tempTablePriceTDSummer);
                                    }
                                    else {
                                        tempTablePriceTDSummer.innerText = '/'
                                        tempTablePriceTR.appendChild(tempTablePriceTDSummer);
                                    }
                                }
                                tempTablePrice.appendChild(tempTablePriceTR);
                            }
                            break;

                        case SEASONSLIST.autumn:

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
                                let tempTablePriceTR = document.createElement('tr');

                                for (let autumn = 0; autumn < tempAutumn.length; autumn++) {
                                    tempParSeason.innerText = tempSeasons[tempSeasonLength];
                                    let tempTablePriceTDAutumn = document.createElement('td');

                                    if (tempAutumnLength === 0) {
                                        tempTablePriceTDAutumn.innerText = tempAutumn[autumn];
                                    }
                                    else {
                                        tempTablePriceTDAutumn.innerText = destinationObject[tempObjectLength].seasons.autumn[tempAutumn[autumn]][tempAutumnLength - 1];
                                    }
                                    if (tempTablePriceTDAutumn.textContent !== 'undefined') {
                                        tempTablePriceTR.appendChild(tempTablePriceTDAutumn);
                                    }
                                    else {
                                        tempTablePriceTDAutumn.innerText = '/';
                                        tempTablePriceTR.appendChild(tempTablePriceTDAutumn);
                                    }
                                }
                                tempTablePrice.appendChild(tempTablePriceTR);
                            }
                            break;

                        case SEASONSLIST.winter:

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
                                let tempTablePriceTR = document.createElement('tr');

                                for (let winter = 0; winter < tempWinter.length; winter++) {
                                    tempParSeason.innerText = tempSeasons[tempSeasonLength];
                                    let tempTablePriceTDWinter = document.createElement('td');

                                    if (tempWinterLength === 0) {
                                        tempTablePriceTDWinter.innerText = tempWinter[winter];
                                    }
                                    else {
                                        tempTablePriceTDWinter.innerText = destinationObject[tempObjectLength].seasons.winter[tempWinter[winter]][tempWinterLength - 1];
                                    }
                                    if (tempTablePriceTDWinter.textContent !== 'undefined') {
                                        tempTablePriceTR.appendChild(tempTablePriceTDWinter);
                                    }
                                    else {
                                        tempTablePriceTDWinter.innerText = '/';
                                        tempTablePriceTR.appendChild(tempTablePriceTDWinter);
                                    }
                                }
                                tempTablePrice.appendChild(tempTablePriceTR);
                            }

                            break;
                    }
                    tempTable.appendChild(tempParSeason)
                    tempTable.appendChild(tempTablePrice);
                }
            }
        }
    };
    function resizeFont() {
        let tempFont = tempBody[0].clientHeight;
        tempH1.style.fontSize = ` ${tempFont * 0.1}px`;
        tempPar.style.fontSize = `${tempFont * 0.025}px`;

        for (let tempTableLength = 0; tempTableLength < tempH1tablePrice.length; tempTableLength++) {
            tempH1[tempTableLength].style.fontSize = `${tempFont * 0.05}px`;
        }
    };
    function mobileView(tempWidth, tempHeight, tempResolution) {   
        tempMainSection.classList.add('mobile');
        tempH1.classList.add('mobile');
        tempImage.classList.add('mobile');
        tempPar.classList.add('mobile');
        tempTable.classList.add('mobile');
        resizeFont();
        if (tempMainSection.style.visibility != 'visible') {
            tempLoading.style.display = 'none';
            tempMainSection.style.visibility = 'visible';
        }
    };

    function desktopView(tempWidth, tempHeight, tempResolution) {
        tempMainSection.classList.remove('mobile');
        tempH1.classList.remove('mobile');
        tempImage.classList.remove('mobile');
        tempPar.classList.remove('mobile');
        tempTable.classList.remove('mobile');
        resizeFont();
        if (tempMainSection.style.visibility != 'visible') {
            tempLoading.style.display = 'none';
            tempMainSection.style.visibility = 'visible';
        }
    };
    on('resize/mobileView', function (event, data) {
        mobileView(data.width, data.height, data.resolution);
    });

    on('resize/desktopView', function (event, data) {
        desktopView(data.width, data.height, data.resolution);
    });

    on('modal', function () {
        modal();
    })
})();

