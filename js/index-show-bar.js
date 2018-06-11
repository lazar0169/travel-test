const showBar = (function () {
    let showBarPrivate = function () {
        if (tempLeftSection.style.width != '100%') {
            tempLeftSection.style.width = '100%';
            tempLeftSection.style.position = 'absolute';
            tempRightSection.style.visibility = 'hidden';
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

        }
        else {
            trigger('hideBar', {});
        }
    };

    let hideBarPrivate = function () {
        if (tempLeftSection.style.width != '20%') {
            tempLeftSection.style.width = '20%';
            tempLeftSection.style.position = 'relative';
            tempRightSection.style.visibility = 'visible';

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
        }

    };


    on('hideBar', function () {
        hideBarPrivate();
    });

    on('showBar', function () {
        showBarPrivate();
    });
})();

