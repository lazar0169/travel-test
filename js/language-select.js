

//global
let tempShowHide;
const showHideLanguage = (function () {

    let showHidePrivate = function () {
        let tempShowHideLanguage = document.getElementById('language');
        if (!tempShowHide) {
            tempShowHide = true;
            tempShowHideLanguage.style.visibility = 'visible';
            document.getElementById('p-button-open-close').innerHTML = '&#9650';
        }
        else {
            tempShowHide = false;
            tempShowHideLanguage.style.visibility = 'hidden';
            document.getElementById('p-button-open-close').innerHTML = ' &#9660';
        }
    };

    let showHidePublic = function () {
        showHidePrivate();
    };
    return {
        showHide: showHidePublic
    };

})();

const createLanguage = (function () {

    let createLanguagePrivate = function () {
        let tempSectionLanguage = document.getElementById('language');
        for (let tempObjectLanguageLength in languageObject) {
            let tempCreateLanguage = document.createElement('a');
            tempCreateLanguage.className = 'list-of-language';
            tempCreateLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
            tempCreateLanguage.setAttribute('data-language', languageObject[tempObjectLanguageLength].language);
            tempSectionLanguage.appendChild(tempCreateLanguage);
        }
        for (let tempIdLanguage of document.getElementsByClassName('list-of-language')) {
            tempIdLanguage.addEventListener('click', () => {
                let tempDataLanguage = tempIdLanguage.dataset.language;
                for (let tempObjectLanguageLength = 0; tempObjectLanguageLength < languageObject.length; tempObjectLanguageLength++) {
                    if (tempDataLanguage === languageObject[tempObjectLanguageLength].language) {
                        let temppLanguage = document.getElementById('p-language');
                        temppLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
                        showHideLanguage.showHide();
                    }
                }
            });
        }
    };

    let createLanguagePublic = function () {
        createLanguagePrivate();
    };
    return {
        choseLanguage: createLanguagePublic
    };
})();

