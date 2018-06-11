const showHideLanguage = (function () {
    let tempShowHide = false;
    let showHidePrivate = function () {
        let tempShowHideLanguage = get('#', 'language');
        tempOpenClose = get('#', 'p-button-open-close')
        if (!tempShowHide) {
            tempShowHide = true;
            tempShowHideLanguage.style.visibility = 'visible';

            tempOpenClose.innerHTML = '';
            tempOpenClose.innerHTML = '&#9660';
        }

        else {
            tempShowHide = false;
            tempShowHideLanguage.style.visibility = 'hidden';
            tempOpenClose.innerHTML = '';
            tempOpenClose.innerHTML = ' &#9650';
        }
    };
    on('showHideLanguage', function () {
        showHidePrivate();
    });

})();

const createLanguage = (function () {

    let createLanguagePrivate = function () {

        let tempSectionLanguage = get('#', 'language');
        
        let tempBody = get('tag', 'body');
        let tempLeftSection = get('#', 'left-section');

        for (let tempObjectLanguageLength in languageObject) {
            let tempCreateLanguage = document.createElement('a');
            tempCreateLanguage.className = 'list-of-language';

            if (tempBody[0].clientWidth < tempBody[0].clientHeight && tempLeftSection.style.width != '100%') {
                tempCreateLanguage.innerHTML = languageObject[tempObjectLanguageLength].id;
                tempCreateLanguage.dataset.id = languageObject[tempObjectLanguageLength].id;
                tempSectionLanguage.appendChild(tempCreateLanguage);
            }
            else {
                tempCreateLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
                tempCreateLanguage.dataset.id = languageObject[tempObjectLanguageLength].id;
                tempSectionLanguage.appendChild(tempCreateLanguage);

            }
        }

        for (let tempIdLanguage of get('.', 'list-of-language')) {
            tempIdLanguage.addEventListener('click', () => {
                let tempBody = get('tag', 'body');
                let tempDataLanguage = tempIdLanguage.dataset.id;
                for (let tempObjectLanguageLength = 0; tempObjectLanguageLength < languageObject.length; tempObjectLanguageLength++) {
                    if (tempDataLanguage === languageObject[tempObjectLanguageLength].id) {
                        let temppLanguage = get('#', 'p-language');
                        if (tempBody[0].clientWidth < tempBody[0].clientHeight) {
                            temppLanguage.innerHTML = languageObject[tempObjectLanguageLength].id;
                            temppLanguage.dataset.id=tempDataLanguage;
                            trigger('showHideLanguage', {});
                        }
                        else {
                            temppLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
                            temppLanguage.dataset.id=tempDataLanguage;
                            trigger('showHideLanguage', {});
                        }

                    }
                }
                trigger('hideBar', { });
            });
        }
    };

    on('language', function () {
        createLanguagePrivate();
    })
})();

