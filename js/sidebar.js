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

    addListener('.link-season', 'click', 'clickSeason');
    addListener('#open-close-language', 'click', 'showHideLanguage');

    function clickSeason(season) {

        destinationWrapper.innerHTML = '';
        trigger('makeArrayId', { season: season });
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

    function createLanguage(languageID) {
        for (let languageNumber in languageObject) {
            let createLanguage = document.createElement('a');
            createLanguage.classList.add('list-of-language');


            if (body[0].clientWidth < body[0].clientHeight) {
                createLanguage.innerHTML = languageObject[languageNumber].id;
                createLanguage.dataset.id = languageObject[languageNumber].id;
                languageWrapper.appendChild(createLanguage);

            }
            else {
                createLanguage.innerHTML = languageObject[languageNumber].language;
                createLanguage.dataset.id = languageObject[languageNumber].id;
                languageWrapper.appendChild(createLanguage);
            }
        }

        for (let languageName of languageList) {
            languageName.addEventListener('click', () => {
                let languageData = languageName.dataset.id;
                for (let languageNumber in languageObject) {
                    if (languageData === languageObject[languageNumber].id) {
                        if (body[0].clientWidth < body[0].clientHeight) {
                            buttonName.innerHTML = languageObject[languageNumber].id;
                            buttonName.dataset.id = languageData;
                            showHideLanguage();
                        }
                        else {
                            buttonName.innerHTML = languageObject[languageNumber].language;
                            buttonName.dataset.id = languageData;
                            showHideLanguage();
                        }
                    }
                }
                hideBar();
            });
        }
        buttonName.dataset.id = languageObject[languageID].id
    };
    barButton.addEventListener('click', () => {
        showBar();
    });

    function showBar() {
        if (sidebarWrapper.style.width !== '100%') {
            sidebarWrapper.style.width = '100%';
            sidebarWrapper.style.position = 'absolute';
            destinationWrapper.style.visibility = 'hidden';
            fullName();
        }
        else {
            hideBar();
        }
    };

    function hideBar() {
        if (sidebarWrapper.style.width !== '20%') {
            sidebarWrapper.style.width = '20%';
            sidebarWrapper.style.position = 'relative';
            destinationWrapper.style.visibility = 'visible';
            substring();
        }
    };

    function mobileView(width, height) {
        let first = get('#section-0');
        first.classList.add('mobile');

        if (mainWrapper.style.visibility !== 'visible') {
            loading.style.display = 'none';
            mainWrapper.style.visibility = 'visible';
        }
        logo.style.visibility = 'hidden';
        barButton.style.visibility = 'visible';
        if (sidebarWrapper.style.width !== '100%') {
            substring();
        }
        trigger('sidebar/setColumns', { column: setColumnsMobile });
        trigger('sidebar/setFont', { width: width, height: height });
        fontSideBarMobile(width, height);
    };

    function desktopView(width, height) {
        trigger('sidebar/setRows', { row: setRows, column: setColumns });
        trigger('sidebar/setFont', { width: width, height: height });
        let first = get('#section-0');
        if (first.classList) {
            first.classList.remove('mobile');
        }

        sidebarWrapper.style.width = '20%';
        fullName();


        fontSideBarMobile(width, height);
        if (mainWrapper.style.visibility !== 'visible') {
            loading.style.display = 'none';
            mainWrapper.style.visibility = 'visible';
        }
        sidebarWrapper.style.position = 'relative';
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
            for (let languageID of languageObject) {
                if (languageID.id === buttonName.dataset.id) {
                    buttonName.innerHTML = languageID.id;
                }
                for (let languageName of languageList) {
                    if (languageID.id === languageName.dataset.id) {
                        languageName.innerHTML = languageID.id;
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
            for (let languageID of languageObject) {
                if (languageID.id === buttonName.dataset.id) {
                    buttonName.innerHTML = languageID.language;
                }
                for (let languageName of languageList) {
                    if (languageID.id === languageName.dataset.id) {
                        languageName.innerHTML = languageID.language;
                        break;
                    }
                }
            }
        }
    };

    function fontSideBarMobile(width, height) {
        if (width < height) {
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
        createLanguage(data.languageID);
    });

    on('showHideLanguage', function () {
        showHideLanguage();
    });

    on('clickSeason', function (event, data) {
        clickSeason(data.data);
    });

})();
