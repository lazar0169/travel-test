const makeModal = (function () {
    let tableWrapper = get('#table-div');
    let mainWrapper = get('#main-section');
    let destinationImage = get('#image-modal');
    let destinationName = get('#destination-name');
    let destinationText = get('#description-text');
    let destinationSeason = get('.season-name');
    let loading = get('#loading');
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

        let params = new URLSearchParams(document.location.search.substring(1));
        let dataId = params.get('id');

        for (let object in destinationObject) {
            if (Number(dataId) === destinationObject[object].id) {
                let seasonsArray = Object.keys(destinationObject[object].seasons);

                destinationName.innerText = destinationObject[object].name;
                destinationImage.src = destinationObject[object].image;
                destinationText.innerText = destinationObject[object].desc;

                for (let season in seasonsArray) {
                    let seasonName = document.createElement('h1');
                    seasonName.classList.add('season-name');
                    let table = document.createElement('table');
                    let seasonID = String(seasonsArray[season]);
                    switch (seasonID) {
                        case SEASONSLIST.spring:

                            let seasonSpring = Object.keys(destinationObject[object].seasons.spring);
                            maxMarch = destinationObject[object].seasons.spring.March.length;
                            maxApril = destinationObject[object].seasons.spring.April.length;
                            maxMay = destinationObject[object].seasons.spring.May.length;
                            if (maxMarch > maxApril && maxMarch > maxMay) {
                                maxValue = maxMarch;
                            }
                            else if (maxApril > maxMay) {
                                maxValue = maxApril
                            }
                            else {
                                maxValue = maxMay;
                            }
                            for (let count = 0; count <= maxValue; count++) {
                                let tableTR = document.createElement('tr');
                                for (let spring = 0; spring < seasonSpring.length; spring++) {
                                    seasonName.innerText = seasonsArray[season];
                                    let tableTdSpring = document.createElement('td');

                                    if (count === 0) {
                                        tableTdSpring.innerText = seasonSpring[spring];
                                    }
                                    else {
                                        if (typeof destinationObject[object].seasons.spring[seasonSpring[spring]][count - 1] !== typeof undefined) {
                                            tableTdSpring.innerText = destinationObject[object].seasons.spring[seasonSpring[spring]][count - 1];

                                        }
                                        else {
                                            tableTdSpring.innerText = '/';

                                        }
                                    }
                                    tableTR.appendChild(tableTdSpring);
                                }
                                table.appendChild(tableTR);
                            }
                            break;

                        case SEASONSLIST.summer:
                            let seasonSummer = Object.keys(destinationObject[object].seasons.summer);

                            maxJune = destinationObject[object].seasons.summer.June.length;
                            maxJuly = destinationObject[object].seasons.summer.July.length;
                            maxAugust = destinationObject[object].seasons.summer.August.length;

                            if (maxJune > maxJuly && maxJune > maxAugust) {
                                maxValue = maxJune;
                            }
                            else if (maxJuly > maxAugust) {
                                maxValue = maxJuly
                            }
                            else {
                                maxValue = maxAugust;
                            }
                            for (let count = 0; count <= maxValue; count++) {
                                let tableTR = document.createElement('tr');

                                for (let summer = 0; summer < seasonSummer.length; summer++) {
                                    seasonName.innerText = seasonsArray[season];
                                    let tableTdSummer = document.createElement('td');

                                    if (count === 0) {
                                        tableTdSummer.innerText = seasonSummer[summer];
                                    }
                                    else {
                                        if (typeof destinationObject[object].seasons.summer[seasonSummer[summer]][count - 1] !== typeof undefined) {
                                            tableTdSummer.innerText = destinationObject[object].seasons.summer[seasonSummer[summer]][count - 1];

                                        }
                                        else {
                                            tableTdSummer.innerText = '/'

                                        }
                                    }
                                    tableTR.appendChild(tableTdSummer);
                                }
                                table.appendChild(tableTR);
                            }
                            break;

                        case SEASONSLIST.autumn:

                            let seasonAutumn = Object.keys(destinationObject[object].seasons.autumn);

                            maxSep = destinationObject[object].seasons.autumn.September.length;
                            maxOct = destinationObject[object].seasons.autumn.October.length;
                            maxNov = destinationObject[object].seasons.autumn.November.length;

                            if (maxSep > maxOct && maxSep > maxNov) {
                                maxValue = maxSep;
                            }
                            else if (maxOct > maxNov) {
                                maxValue = maxOct
                            }
                            else {
                                maxValue = maxNov;
                            }
                            for (let count = 0; count <= maxValue; count++) {
                                let tableTR = document.createElement('tr');

                                for (let autumn = 0; autumn < seasonAutumn.length; autumn++) {
                                    seasonName.innerText = seasonsArray[season];
                                    let tableTdAutumn = document.createElement('td');

                                    if (count === 0) {
                                        tableTdAutumn.innerText = seasonAutumn[autumn];
                                    }
                                    else {
                                        if (typeof destinationObject[object].seasons.autumn[seasonAutumn[autumn]][count - 1] !== typeof undefined) {
                                            tableTdAutumn.innerText = destinationObject[object].seasons.autumn[seasonAutumn[autumn]][count - 1];

                                        }
                                        else {
                                            tableTdAutumn.innerText = '/';
                                        }
                                    }
                                    tableTR.appendChild(tableTdAutumn);
                                }
                                table.appendChild(tableTR);
                            }
                            break;

                        case SEASONSLIST.winter:

                            let seasonWinter = Object.keys(destinationObject[object].seasons.winter);

                            maxJan = destinationObject[object].seasons.winter.January.length;
                            maxFeb = destinationObject[object].seasons.winter.February.length;
                            maxDec = destinationObject[object].seasons.winter.December.length;

                            if (maxJan > maxFeb && maxJan > maxMarch) {
                                maxValue = maxJan;
                            }
                            else if (maxFeb > maxDec) {
                                maxValue = maxFeb
                            }
                            else {
                                maxValue = maxDec;
                            }
                            for (let count = 0; count <= maxValue; count++) {
                                let tableTR = document.createElement('tr');

                                for (let winter = 0; winter < seasonWinter.length; winter++) {
                                    seasonName.innerText = seasonsArray[season];
                                    let tableTdWinter = document.createElement('td');

                                    if (count === 0) {
                                        tableTdWinter.innerText = seasonWinter[winter];

                                    }
                                    else {
                                        if (typeof destinationObject[object].seasons.winter[seasonWinter[winter]][count - 1] !== typeof undefined) {
                                            tableTdWinter.innerText = destinationObject[object].seasons.winter[seasonWinter[winter]][count - 1];
                                        }
                                        else {
                                            tableTdWinter.innerText = '/';
                                        }
                                    }
                                    tableTR.appendChild(tableTdWinter);
                                }
                                table.appendChild(tableTR);
                            }
                            break;
                    }
                    tableWrapper.appendChild(seasonName)
                    tableWrapper.appendChild(table);
                }
            }
        }
    };
    function resizeFont(width, height) {
        if (width < height) {
            destinationName.style.fontSize = ` ${height * 0.09}px`;
            destinationText.style.fontSize = `${height * 0.0225}px`;
            for (let count = 0; count < destinationSeason.length; count++) {
                destinationSeason[count].style.fontSize = `${height * 0.05}px`;
            }
        }
        else {
            destinationName.style.fontSize = ` ${width * 0.09}px`;
            destinationText.style.fontSize = `${width * 0.0225}px`;
            for (let count = 0; count < destinationSeason.length; count++) {
                destinationSeason[count].style.fontSize = `${width * 0.05}px`;
            }
        }
    };
    function mobileView(width, height) {
        mainWrapper.classList.add('mobile');
        destinationName.classList.add('mobile');
        destinationImage.classList.add('mobile');
        destinationText.classList.add('mobile');
        tableWrapper.classList.add('mobile');
        resizeFont(width, height);
        if (mainWrapper.style.visibility != 'visible') {
            loading.style.display = 'none';
            mainWrapper.style.visibility = 'visible';
        }
    };

    function desktopView(width, height) {
        mainWrapper.classList.remove('mobile');
        destinationName.classList.remove('mobile');
        destinationImage.classList.remove('mobile');
        destinationText.classList.remove('mobile');
        tableWrapper.classList.remove('mobile');
        resizeFont(width, height);
        if (mainWrapper.style.visibility != 'visible') {
            loading.style.display = 'none';
            mainWrapper.style.visibility = 'visible';
        }
    };
    on('resize/mobileView', function (event, data) {
        mobileView(data.width, data.height);
    });

    on('resize/desktopView', function (event, data) {
        desktopView(data.width, data.height);
    });

    on('modal', function () {
        modal();
    })
})();

