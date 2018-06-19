const bar = (function () {
    let tempRightSection = get('#right-section');
    let tempBody = get('body');
    let tempLeftSection = get('#left-section');
    let tempLanguageList = get('.list-of-language');
    let temppLanguage = get('#p-language');
    let tempOpenCloseButton = get('#p-button-open-close');
    let tempLanguage = get('#language');
    let tempIndexMobileView = get('#index-mobile-view-css');
    let tempShowBar = get('#show-bar');
    let tempLogo = get('#logo-article');
    let tempSeasonsList = get('.link-season');


    let clickSeasonPrivate = function (tempSeason) {

        tempRightSection.innerHTML = '';
        if (tempBody[0].clientHeight > tempBody[0].clientWidth) {
            if (tempSeason === 'all') {
                trigger('makeArrayId', { season: tempSeason });
                trigger('setColumns', {});
                hideBar();  
            }
            else {
                trigger('makeArrayId', { season: tempSeason });
                trigger('setColumns', {});
                hideBar();  
            }
        }
        else {
            if (tempSeason === 'all') {
                trigger('makeArrayId', { season: tempSeason });
                trigger('setRows', {});
                hideBar();   
            }
            else {
                trigger('makeArrayId', { season: tempSeason });
                trigger('setRows', {});
                hideBar();
            }

        }
    }

    let showHideLanguage = function () {

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

    let createLanguagePrivate = function () {

        for (let tempObjectLanguageLength in languageObject) {
            let tempCreateLanguage = document.createElement('a');
            tempCreateLanguage.className = 'list-of-language';

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
                            temppLanguage.innerHTML = languageObject[tempObjectLanguageLength].id;
                            temppLanguage.dataset.id = tempDataLanguage;
                            showHideLanguage();
                        }
                        else {
                            temppLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
                            temppLanguage.dataset.id = tempDataLanguage;
                            showHideLanguage();
                        }
                    }
                }
                hideBar();
            });
        }
    };

    tempShowBar.addEventListener('click', ()=>{
        showBar();
    });

    let showBar = function () {
        if (tempLeftSection.style.width != '100%') {
            tempLeftSection.style.width = '100%';
            tempLeftSection.style.position = 'absolute';
            tempRightSection.style.visibility = 'hidden';
            fullName();

        }
        else {
            hideBar();
        }
    };

    let hideBar = function () {
        if (tempLeftSection.style.width != '20%') {
            tempLeftSection.style.width = '20%';
            tempLeftSection.style.position = 'relative';
            tempRightSection.style.visibility = 'visible';
            substring();
        }
    };




    let mobileView = function () {

        tempLogo.style.visibility = 'hidden';
        tempShowBar.style.visibility = 'visible';
        if (tempLeftSection.style.width != '100%') {
            substring();
        }
    };

    let desktopView = function () {

        tempLogo.style.visibility = 'visible';
        tempShowBar.style.visibility = 'hidden';
        tempLeftSection.style.width = '20%';
        tempLeftSection.style.position = 'relative';
        tempRightSection.style.visibility = 'visible';
        fullName();
    };




    let substring = function () {
        for (let tempSeasonsListLength of tempSeasonsList) {
            tempSeasonsListLength.innerHTML = tempSeasonsListLength.dataset.id.substring(0, 3);
        }

        if (tempLanguageList.length != 0) {
            for (let tempLanguageID of languageObject) {
                if (tempLanguageID.id === temppLanguage.dataset.id) {
                    temppLanguage.innerHTML = tempLanguageID.id;
                }
                for (let tempLanguageListLength of tempLanguageList) {
                    if (tempLanguageID.id === tempLanguageListLength.dataset.id) {
                        tempLanguageListLength.innerHTML = tempLanguageID.id;
                    }
                }
            }
        }
    };

    let fullName = function () {
        for (let tempSeasonsListLength of tempSeasonsList) {
            tempSeasonsListLength.innerHTML = tempSeasonsListLength.dataset.id;
        }

        if (tempLanguageList.length != 0) {
            for (let tempLanguageID of languageObject) {
                if (tempLanguageID.id === temppLanguage.dataset.id) {
                    temppLanguage.innerHTML = tempLanguageID.language;
                }
                for (let tempLanguageListLength of tempLanguageList) {
                    if (tempLanguageID.id === tempLanguageListLength.dataset.id) {
                        tempLanguageListLength.innerHTML = tempLanguageID.language;
                    }
                }
            }
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
    })


    on('showHideLanguage', function () {
        showHideLanguage();
    });


    on('clickSeason', function (event, tempData) {
        clickSeasonPrivate(tempData.data);
    });

})();
