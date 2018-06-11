const mobileView = (function () {
    let mobileViewPrivate = function () {

        if (tempBody[0].clientWidth < tempBody[0].clientHeight) {
            tempIndexMobileView.disabled = false;
            tempLogo.style.visibility = 'hidden';
            tempShowBar.style.visibility = 'visible';

            for(let tempSeasonsListLength of tempSeasonsList){
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
        else {
            tempIndexMobileView.disabled = true;
            tempLogo.style.visibility = 'visible';
            tempShowBar.style.visibility = 'hidden';
            tempLeftSection.style.width = '20%';
            tempLeftSection.style.position = 'relative';
            tempRightSection.style.visibility = 'visible';
            for(let tempSeasonsListLength of tempSeasonsList){
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
    };
    addListener('#', 'show-bar', 'click', 'showBar');




    on('mobileView', function (event, tempData) {
        mobileViewPrivate(tempData.data);
    });
})();
