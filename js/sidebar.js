const bar = (function () {
    let tempRightSection = get('#right-section');
    let tempBody = get('body');
    let tempLeftSection = get('#left-section');
    let tempLanguageList = get('.list-of-language');
    let tempPLanguage = get('#p-language');
    let tempOpenCloseButton = get('#p-button-open-close');
    let tempOpenCloseLanguage = get('#open-close-language');
    let tempLanguage = get('#language');
    let tempShowBar = get('#show-bar');
    let tempLogo = get('#logo-article');
    let tempSeasonsList = get('.link-season');
    let tempSeasonLink = get('#season-section');
    let tempMainSection = get('#main-section');
    let tempLoading = get('#loading');


    
    addListener('#show-bar', 'click', 'showBar');
    addListener('.link-season', 'click', 'clickSeason');
    addListener('#open-close-language', 'click', 'showHideLanguage');

    function clickSeason(tempSeason) {

        tempRightSection.innerHTML = '';
        trigger('makeArrayId', { season: tempSeason });
        hideBar();
        trigger('setResolution', {});
    }

    function showHideLanguage() {
        if (!tempShowHide) {
            tempShowHide = true;
            tempLanguage.style.visibility = 'visible';
            tempOpenCloseButton.innerHTML = '';
            tempOpenCloseButton.innerHTML = '&#9660';
        }
        else {
            tempShowHide = false;
            tempLanguage.style.visibility = 'hidden';
            tempOpenCloseButton.innerHTML = '';
            tempOpenCloseButton.innerHTML = ' &#9650';
        }
    };

    function createLanguage(tempLanguageID) {
        for (let tempObjectLanguageLength in languageObject) {
            let tempCreateLanguage = document.createElement('a');
            tempCreateLanguage.classList.add('list-of-language');


            if (tempBody[0].clientWidth < tempBody[0].clientHeight) {
                tempCreateLanguage.innerHTML = languageObject[tempObjectLanguageLength].id;
                tempCreateLanguage.dataset.id = languageObject[tempObjectLanguageLength].id;
                tempLanguage.appendChild(tempCreateLanguage);

            }
            else {
                tempCreateLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
                tempCreateLanguage.dataset.id = languageObject[tempObjectLanguageLength].id;
                tempLanguage.appendChild(tempCreateLanguage);
            }
        }

        for (let tempIdLanguage of tempLanguageList) {
            tempIdLanguage.addEventListener('click', () => {
                let tempDataLanguage = tempIdLanguage.dataset.id;
                for (let tempObjectLanguageLength = 0; tempObjectLanguageLength < languageObject.length; tempObjectLanguageLength++) {
                    if (tempDataLanguage === languageObject[tempObjectLanguageLength].id) {
                        if (tempBody[0].clientWidth < tempBody[0].clientHeight) {
                            tempPLanguage.innerHTML = languageObject[tempObjectLanguageLength].id;
                            tempPLanguage.dataset.id = tempDataLanguage;
                            showHideLanguage();
                        }
                        else {
                            tempPLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
                            tempPLanguage.dataset.id = tempDataLanguage;
                            showHideLanguage();
                        }
                    }
                }
                hideBar();
            });
        }
        tempPLanguage.dataset.id = languageObject[tempLanguageID].id
    };
    tempShowBar.addEventListener('click', () => {
        showBar();
    });

    function showBar() {
        if (tempLeftSection.style.width !== '100%') {
            tempLeftSection.style.width = '100%';
            tempLeftSection.style.position = 'absolute';
            tempRightSection.style.visibility = 'hidden';
            fullName();
        }
        else {
            hideBar();
        }
    };

    function hideBar() {
        if (tempLeftSection.style.width !== '20%') {
            tempLeftSection.style.width = '20%';
            tempLeftSection.style.position = 'relative';
            tempRightSection.style.visibility = 'visible';
            substring();
        }
    };

    function mobileView(tempWidth, tempHeight) {
        let tempSection0 = get('#section-0');
        tempSection0.classList.add('mobile');

        if (tempMainSection.style.visibility !== 'visible') {
            tempLoading.style.display = 'none';
            tempMainSection.style.visibility = 'visible';
        }
        tempLogo.style.visibility = 'hidden';
        tempShowBar.style.visibility = 'visible';
        if (tempLeftSection.style.width !== '100%') {
            substring();
        }
        trigger('setColumns', { column: 1 });
        trigger('setFont', { width: tempWidth, height: tempHeight });
        fontSideBarMobile(tempWidth, tempHeight);
    };

    function desktopView(tempWidth, tempHeight) {
        let tempSection0 = get('#section-0');
        if (tempSection0.classList) {
            tempSection0.classList.remove('mobile');
        }

        tempLeftSection.style.width = '20%';
        fullName();
        trigger('setRows', { row: 3, column: 3 });
        trigger('setFont', { width: tempWidth, height: tempHeight });
        fontSideBarMobile(tempWidth, tempHeight);
        if (tempMainSection.style.visibility !== 'visible') {
            tempLoading.style.display = 'none';
            tempMainSection.style.visibility = 'visible';
        }
        tempLeftSection.style.position = 'relative';
        tempRightSection.style.visibility = 'visible';
        tempLogo.style.visibility = 'visible';
        tempShowBar.style.visibility = 'hidden';

    };

    function substring() {
        for (let tempSeasonsListLength of tempSeasonsList) {
            switch (tempSeasonsListLength.dataset.id) {
                case SEASONSLIST.spring:
                    tempSeasonsListLength.innerHTML = `<i class="mdi mdi-flower mobileIcons"></i>`;
                    break;

                case SEASONSLIST.winter:
                    tempSeasonsListLength.innerHTML = `<i class="mdi mdi-snowflake mobileIcons"></i>`;
                    break;

                case SEASONSLIST.autumn:
                    tempSeasonsListLength.innerHTML = `<i class="mdi mdi-leaf mobileIcons"></i>`;
                    break;

                case SEASONSLIST.summer:
                    tempSeasonsListLength.innerHTML = `<i class="mdi mdi-white-balance-sunny mobileIcons"></i>`;
                    break;

                case SEASONSLIST.all:
                    tempSeasonsListLength.innerHTML = `<i class="mdi mdi-apple-safari mobileIcons"></i>`;
                    break;
            }
        }

        if (tempLanguageList.length !== 0) {
            for (let tempLanguageID of languageObject) {
                if (tempLanguageID.id === tempPLanguage.dataset.id) {
                    tempPLanguage.innerHTML = tempLanguageID.id;
                }
                for (let tempLanguageListLength of tempLanguageList) {
                    if (tempLanguageID.id === tempLanguageListLength.dataset.id) {
                        tempLanguageListLength.innerHTML = tempLanguageID.id;
                        break;
                    }
                }
            }
        }
    };

    function fullName() {
        for (let tempSeasonsListLength of tempSeasonsList) {
            switch (tempSeasonsListLength.dataset.id) {
                case SEASONSLIST.spring:
                    tempSeasonsListLength.innerHTML = `<i class="mdi mdi-flower icons"></i> <p class="season-name">${tempSeasonsListLength.dataset.id}</p>`;
                    break;

                case SEASONSLIST.winter:
                    tempSeasonsListLength.innerHTML = `<i class="mdi mdi-snowflake icons"></i> <p class="season-name">${tempSeasonsListLength.dataset.id}</p>`;
                    break;

                case SEASONSLIST.autumn:
                    tempSeasonsListLength.innerHTML = `<i class="mdi mdi-leaf icons"></i> <p class="season-name">${tempSeasonsListLength.dataset.id}</p>`;
                    break;

                case SEASONSLIST.summer:
                    tempSeasonsListLength.innerHTML = `<i class="mdi mdi-white-balance-sunny icons"></i> <p class="season-name">${tempSeasonsListLength.dataset.id}</p>`;
                    break;

                case SEASONSLIST.all:
                    tempSeasonsListLength.innerHTML = `<i class="mdi mdi-apple-safari icons"></i><p class="season-name">${tempSeasonsListLength.dataset.id}</p>`;
                    break;
            }
        }

        if (tempLanguageList.length !== 0) {
            for (let tempLanguageID of languageObject) {
                if (tempLanguageID.id === tempPLanguage.dataset.id) {
                    tempPLanguage.innerHTML = tempLanguageID.language;
                }
                for (let tempLanguageListLength of tempLanguageList) {
                    if (tempLanguageID.id === tempLanguageListLength.dataset.id) {
                        tempLanguageListLength.innerHTML = tempLanguageID.language;
                        break;
                    }
                }
            }
        }
    };

    function fontSideBarMobile(tempWidth, tempHeight) {
        if (tempWidth < tempHeight) {
            tempSeasonLink.style.fontSize = `${tempWidth * 0.05}px`;
            tempOpenCloseLanguage.style.fontSize = `${tempWidth * 0.05}px`;
            tempLanguage.style.fontSize = `${tempWidth * 0.05}px`;
        }
        else {
            tempSeasonLink.style.fontSize = `${tempHeight * 0.04}px`;
            tempOpenCloseLanguage.style.fontSize = `${tempHeight * 0.04}px`;
            tempLanguage.style.fontSize = `${tempHeight * 0.04}px`;
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
