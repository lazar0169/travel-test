const showHideLanguage = (function () {
    let tempOpenCloseButton = get('#p-button-open-close');
    let tempLanguage = get('#language');
    let showHidePrivate = function () {

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
    on('showHideLanguage', function () {
        showHidePrivate();
    });

})();

const createLanguage = (function () {
    let tempBody = get('body');
    let tempLeftSection = get('#left-section');
    let tempLanguageList = get('.list-of-language');
    let temppLanguage = get('#p-language');
    let tempLanguage = get('#language');
    let createLanguagePrivate = function () {

        for (let tempObjectLanguageLength in languageObject) {
            let tempCreateLanguage = document.createElement('a');
            tempCreateLanguage.className = 'list-of-language';

            if (tempBody[0].clientWidth < tempBody[0].clientHeight && tempLeftSection.style.width != '100%') {
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
                            trigger('showHideLanguage', {});
                        }
                        else {
                            temppLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
                            temppLanguage.dataset.id = tempDataLanguage;
                            trigger('showHideLanguage', {});
                        }
                    }
                }
                trigger('hideBar', {});
            });
        }
    };

    on('language', function () {
        createLanguagePrivate();
    })
})();

