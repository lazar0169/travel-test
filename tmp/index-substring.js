const substring = (function () {
    let tempSeasonsList = get('.link-season');
    let tempLanguageList = get('.list-of-language');
    let temppLanguage = get('#p-language');
    let tempLanguage = get('#language');

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

    let fullName = function (){
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

    on('substring', function () {
        substring();
    });

    on('fullName', function (){
        fullName();
    })
})();