const mobileView = (function () {
    let tempBody = get('tag', 'body');
    let tempLogo = get('#', 'logo-article');
    let tempShowBar = get('#', 'show-bar');
    let tempMobileView = get('#', 'index-mobile-view-css');
    let tempLeftSection = get('#', 'left-section');
    let tempRightSection = get('#', 'right-section');
    let temppLanguage = get('#', 'p-language');
    let tempLanguageList = get('.', 'list-of-language');

    let mobileViewPrivate = function () {

        if (tempBody[0].clientWidth < tempBody[0].clientHeight) {
            tempMobileView.disabled = false;
            tempLogo.style.visibility = 'hidden';
            tempShowBar.style.visibility = 'visible';

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

        }
        else {
            tempMobileView.disabled = true;
            tempLogo.style.visibility = 'visible';
            tempShowBar.style.visibility = 'hidden';
            tempLeftSection.style.width = '20%';
            tempLeftSection.style.position = 'relative';
            tempRightSection.style.visibility = 'visible';

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
        }
    };
    addListener('#', 'show-bar', 'click', 'showBar');




    on('mobileView', function (event, tempData) {
        mobileViewPrivate(tempData.data);
    });
})();
