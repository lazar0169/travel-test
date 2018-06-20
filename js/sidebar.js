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
        if (tempBody[0].clientHeight > tempBody[0].clientWidth) {
            trigger('setColumns', { column: 1 });
        }
        else {
            trigger('setRows', { row: 3, column: 3 });
        }
        hideBar();
        trigger('setFont', {});
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

    function createLanguagePrivate() {
        for (let tempObjectLanguageLength in languageObject) {
            let tempCreateLanguage = document.createElement('a');
            tempCreateLanguage.classList.add('list-of-language')

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
    };
    tempShowBar.addEventListener('click', () => {
        showBar();
    });

    function showBar() {
        if (tempLeftSection.style.width != '100%') {
            tempLeftSection.style.width = '100%';
            tempLeftSection.style.position = 'absolute';
            tempRightSection.style.visibility = 'hidden';
            fullName();
            fontSideBarMobile();
        }
        else {
            hideBar();
        }
    };

    function hideBar() {
        if (tempLeftSection.style.width != '20%') {
            tempLeftSection.style.width = '20%';
            tempLeftSection.style.position = 'relative';
            tempRightSection.style.visibility = 'visible';
            substring();
        }
    };

    function mobileView() {
        if (tempMainSection.style.visibility != 'visible') {
            tempLoading.style.display = 'none';
            tempMainSection.style.visibility = 'visible';
        }
        tempLogo.style.visibility = 'hidden';
        tempShowBar.style.visibility = 'visible';
        if (tempLeftSection.style.width != '100%') {
            substring();
        }
        trigger('setColumns', { column: 1 });
        trigger('setFont', {});
        fontSideBarMobile();
    };

    function desktopView() {
        tempLeftSection.style.width = '20%';
        fullName();
        trigger('setRows', { row: 3, column: 3 });
        trigger('setFont', {});
        fontSideBarMobile();
        if (tempMainSection.style.visibility != 'visible') {
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
            tempSeasonsListLength.innerHTML = tempSeasonsListLength.dataset.id.substring(0, 3);
        }

        if (tempLanguageList.length != 0) {
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
            tempSeasonsListLength.innerHTML = tempSeasonsListLength.dataset.id;
        }

        if (tempLanguageList.length != 0) {
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

    function fontSideBarMobile() {
        let tempLinkHeight = tempSeasonLink.clientHeight;
        let tempChosenLanguageHeight = tempOpenCloseLanguage.clientHeight;
        if (tempLeftSection.style.width == '100%') {
            tempSeasonLink.style.fontSize = `${tempLinkHeight * 0.17}px`;
            tempOpenCloseLanguage.style.fontSize = `${tempChosenLanguageHeight * 0.3}px`;
            tempLanguage.style.fontSize = `${tempChosenLanguageHeight * 0.5}px`;
        }
        else {
            tempSeasonLink.style.fontSize = `${tempLinkHeight * 0.17}px`;
            tempOpenCloseLanguage.style.fontSize = `${tempChosenLanguageHeight * 0.3}px`;
            tempLanguage.style.fontSize = `${tempChosenLanguageHeight * 0.5}px`;
        }

    };

    on('resize/mobileView', function (event, data) {
        mobileView();
    });

    on('resize/desktopView', function (event, data) {
        desktopView();
    });

    on('language', function () {
        createLanguagePrivate();
    });

    on('showHideLanguage', function () {
        showHideLanguage();
    });

    on('clickSeason', function (event, tempData) {
        clickSeason(tempData.data);
    });

})();
