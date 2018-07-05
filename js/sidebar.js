const bar = (function () {
    let destinationWrapper = get('#right-section');
    let sidebarWrapper = get('#left-section');
    let languageWrapper = get('#language');
    let languageList = get('.list-of-language');
    let languageButton = get('#open-close-language');
    let buttonSymbol = get('#p-symbol');
    let buttonName = get('#p-language');
    let barButton = get('#show-bar-button');
    let seasonWrapper = get('#season-section');
    let linkName = get('.link-season');
    let mainWrapper = get('#main-section');
    let loading = get('#loading');
    let logo = get('#logo-article');
    let body = get('body');
    //closed show bar
    let isClose = true;
    let isOpen = true;

    addListener('.link-season', 'click', 'clickSeason');
    addListener('#open-close-language', 'click', 'showHideLanguage');

    function clickSeason(season) {

        destinationWrapper.innerHTML = '';
        trigger('makeArrayId', { season: season, data: dataObject });
        hideBar();
        trigger('setResolution', {});
    }

    function showHideLanguage() {
        if (!SHOW_HIDE) {
            SHOW_HIDE = true;
            languageWrapper.style.visibility = 'visible';
            buttonSymbol.innerHTML = '';
            buttonSymbol.innerHTML = '&#9660';
        }
        else {
            SHOW_HIDE = false;
            languageWrapper.style.visibility = 'hidden';
            buttonSymbol.innerHTML = '';
            buttonSymbol.innerHTML = ' &#9650';
        }
    };

    function createLanguage(languageId, data) {
        for (let languageNumber in data.language) {
            let languageList = document.createElement('a');
            languageList.classList.add('list-of-language');

            if (body[0].clientWidth < body[0].clientHeight) {
                createLanguage.innerHTML = data.language[languageNumber].id;
                languageList.dataset.id = data.language[languageNumber].id;
                languageWrapper.appendChild(languageList);
            }
            else {
                createLanguage.innerHTML = data.language[languageNumber].language;
                languageList.dataset.id = data.language[languageNumber].id;
                languageWrapper.appendChild(languageList);
            }
        }

        for (let languageName of languageList) {
            languageName.addEventListener('click', () => {
                let languageData = languageName.dataset.id;
                for (let languageNumber in data.language) {
                    if (languageData === data.language[languageNumber].id) {
                        if (body[0].clientWidth < body[0].clientHeight) {
                            buttonName.innerHTML = data.language[languageNumber].id;
                            buttonName.dataset.id = languageData;
                            showHideLanguage();
                        }
                        else {
                            buttonName.innerHTML = data.language[languageNumber].language;
                            buttonName.dataset.id = languageData;
                            showHideLanguage();
                        }
                    }
                }
                hideBar();
            });
        }
        buttonName.dataset.id = data.language[languageId].id
    };
    barButton.addEventListener('click', () => {
        showBar();
    });

    function showBar() {
        if (isClose) {
            isClose = false;
            destinationWrapper.style.visibility = 'hidden';
            sidebarWrapper.classList.add('expand');
            fullName();
        }
        else {
            destinationWrapper.style.visibility = 'visible';
            sidebarWrapper.classList.remove('expand');
            hideBar();
            isClose = true;
        }
    };

    function hideBar() {
        if (isOpen) {
            isClose = true;
            destinationWrapper.style.visibility = 'visible';
            sidebarWrapper.classList.remove('expand');
            substring();
        }

    };

    function mobileView(width, height) {
        let first = get('#section-0');
        first.classList.add('mobile');
        isOpen = true;


        if (mainWrapper.style.visibility !== 'visible') {
            loading.style.display = 'none';
            mainWrapper.style.visibility = 'visible';
        }
        logo.style.visibility = 'hidden';
        barButton.style.visibility = 'visible';
        if (isClose) {
            substring();
        }
        trigger('sidebar/setColumns', { column: setColumnsMobile });
        trigger('sidebar/setFont', { width: width, height: height });
        fontSideBarMobile(width, height);
    };

    function desktopView(width, height) {
        isOpen = false;
        isClose = true;
        trigger('sidebar/setRows', { row: setRows, column: setColumns });
        trigger('sidebar/setFont', { width: width, height: height });
        let first = get('#section-0');
        first.classList.remove('mobile');
        sidebarWrapper.classList.remove('expand');
        fullName();


        fontSideBarMobile(width, height);
        if (mainWrapper.style.visibility !== 'visible') {
            loading.style.display = 'none';
            mainWrapper.style.visibility = 'visible';
        }
        destinationWrapper.style.visibility = 'visible';
        logo.style.visibility = 'visible';
        barButton.style.visibility = 'hidden';

    };

    function substring() {
        for (let season of linkName) {
            switch (season.dataset.id) {
                case SEASONSLIST.spring:
                    season.innerHTML = `<i class="mdi mdi-flower mobileIcons"></i>`;
                    break;

                case SEASONSLIST.winter:
                    season.innerHTML = `<i class="mdi mdi-snowflake mobileIcons"></i>`;
                    break;

                case SEASONSLIST.autumn:
                    season.innerHTML = `<i class="mdi mdi-leaf mobileIcons"></i>`;
                    break;

                case SEASONSLIST.summer:
                    season.innerHTML = `<i class="mdi mdi-white-balance-sunny mobileIcons"></i>`;
                    break;

                case SEASONSLIST.all:
                    season.innerHTML = `<i class="mdi mdi-apple-safari mobileIcons"></i>`;
                    break;
            }
        }

        if (languageList.length !== 0) {
            for (let languageId of dataObject.language) {
                if (languageId.id === buttonName.dataset.id) {
                    buttonName.innerHTML = languageId.id;
                }
                for (let languageName of languageList) {
                    if (languageId.id === languageName.dataset.id) {
                        languageName.innerHTML = languageId.id;
                        break;
                    }
                }
            }
        }
    };

    function fullName() {
        for (let season of linkName) {
            switch (season.dataset.id) {
                case SEASONSLIST.spring:
                    season.innerHTML = `<i class="mdi mdi-flower icons"></i> <p class="season-name">${season.dataset.id}</p>`;
                    break;

                case SEASONSLIST.winter:
                    season.innerHTML = `<i class="mdi mdi-snowflake icons"></i> <p class="season-name">${season.dataset.id}</p>`;
                    break;

                case SEASONSLIST.autumn:
                    season.innerHTML = `<i class="mdi mdi-leaf icons"></i> <p class="season-name">${season.dataset.id}</p>`;
                    break;

                case SEASONSLIST.summer:
                    season.innerHTML = `<i class="mdi mdi-white-balance-sunny icons"></i> <p class="season-name">${season.dataset.id}</p>`;
                    break;

                case SEASONSLIST.all:
                    season.innerHTML = `<i class="mdi mdi-apple-safari icons"></i><p class="season-name">${season.dataset.id}</p>`;
                    break;
            }
        }

        if (languageList.length !== 0) {
            for (let languageId of dataObject.language) {
                if (languageId.id === buttonName.dataset.id) {
                    buttonName.innerHTML = languageId.language;
                }
                for (let languageName of languageList) {
                    if (languageId.id === languageName.dataset.id) {
                        languageName.innerHTML = languageId.language;
                        break;
                    }
                }
            }
        }
    };

    function fontSideBarMobile(width, height) {
        if (width < height) {
            barButton.style.fontSize = `${width * 0.2}px`
            seasonWrapper.style.fontSize = `${width * 0.05}px`;
            languageButton.style.fontSize = `${width * 0.05}px`;
            languageWrapper.style.fontSize = `${width * 0.05}px`;
        }
        else {
            seasonWrapper.style.fontSize = `${height * 0.04}px`;
            languageButton.style.fontSize = `${height * 0.04}px`;
            languageWrapper.style.fontSize = `${height * 0.04}px`;
        }
    };

    on('resize/mobileView', function (event, data) {
        mobileView(data.width, data.height, data.resolution);
    });

    on('resize/desktopView', function (event, data) {
        desktopView(data.width, data.height, data.resolution);
    });

    on('language', function (event, data) {
        createLanguage(data.languageId, data.data);
    });

    on('showHideLanguage', function () {
        showHideLanguage();
    });

    on('clickSeason', function (event, data) {
        clickSeason(data.data);
    });

})();
