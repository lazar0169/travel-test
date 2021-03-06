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

    addListener('.link-season', 'click', 'clickSeason');
    addListener('#open-close-language', 'click', 'showHideLanguage');

    function clickSeason(season) {
        trigger('makeArrayId', { season: season, data: dataObject });
        if (sidebarWrapper.classList.contains('expand')) {
            hideBar();
        }
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
        for (let language of data.language) {
            languageWrapper.innerHTML += `<a data-id=${language.id} class="list-of-language"></a>`;
        }
        for (let languageName of languageList) {
            languageName.addEventListener('click', () => {
                let languageData = languageName.dataset.id;
                buttonName.innerHTML = languageName.textContent;
                buttonName.dataset.id = languageData;
                showHideLanguage();
                if (sidebarWrapper.classList.contains('expand')) {
                    hideBar();
                }
            });
        }
        buttonName.dataset.id = data.language[languageId].id
    };
    barButton.addEventListener('click', () => {
        showBar();
    });

    function showBar() {
        if (!sidebarWrapper.classList.contains('expand')) {

            destinationWrapper.style.visibility = 'hidden';

            sidebarWrapper.classList.add('expand');
            fullName();
        }
        else {
            destinationWrapper.style.visibility = 'visible';
            sidebarWrapper.classList.remove('expand');
            hideBar();
        }
    };

    function hideBar() {
        if (sidebarWrapper.classList.contains('expand')) {
            destinationWrapper.style.visibility = 'visible';
            sidebarWrapper.classList.remove('expand');
        }
        substring();
    };

    function mobileView(width, height) {

        if (isMobile) {
            if (mainWrapper.style.visibility !== 'visible') {
                loading.style.display = 'none';
                mainWrapper.style.visibility = 'visible';
            }
            logo.style.visibility = 'hidden';
            barButton.style.visibility = 'visible';
            if (linkName[0].childNodes.length === 0 || linkName[0].textContent != "") {
                substring();
            }
        }
        let first = get('#section-0');
        if (!first.classList.contains('mobile')) {
            first.classList.add('mobile');
        }
        trigger('sidebar/setColumns', { column: setColumnsMobile });
        trigger('sidebar/setFont', { width: width, height: height });
        fontSideBarMobile(width, height);
        isMobile = false;
        isDesktop = true;
    };

    function desktopView(width, height) {
        trigger('sidebar/setRows', { row: setRows, column: setColumns });
        trigger('sidebar/setFont', { width: width, height: height });
        if (isDesktop) {
            let first = get('#section-0');

            if (first.classList.contains('mobile')) {
                first.classList.remove('mobile')
            }

            if (sidebarWrapper.classList.contains('expand')) {
                sidebarWrapper.classList.remove('expand');
            }
            fullName();
            if (mainWrapper.style.visibility !== 'visible') {
                loading.style.display = 'none';
                mainWrapper.style.visibility = 'visible';
            }
            destinationWrapper.style.visibility = 'visible';
            logo.style.visibility = 'visible';
            barButton.style.visibility = 'hidden';
        }
        fontSideBarMobile(width, height);
        isDesktop = false;
        isMobile = true;
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

    on('createLanguage', function (event, data) {
        createLanguage(data.languageId, data.data);
    });

    on('showHideLanguage', function () {
        showHideLanguage();
    });

    on('clickSeason', function (event, data) {
        clickSeason(data.data);
    });

})();
