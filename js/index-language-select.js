const showHideLanguage = (function () {

    let showHidePrivate = function () {
        let tempShowHideLanguage = get('#', 'language');
        if (!tempShowHide) {
            tempShowHide = true;
            tempShowHideLanguage.style.visibility = 'visible';
            get('#', 'p-button-open-close').innerHTML = '&#9660';
        }
        else {
            tempShowHide = false;
            tempShowHideLanguage.style.visibility = 'hidden';
            get('p-button-open-close').innerHTML = ' &#9650';
        }
    };

   on('showHideLanguage', function(){
        showHidePrivate();
   });

})();

const createLanguage = (function () {

    let createLanguagePrivate = function () {
        let tempSectionLanguage = get('#', 'language');
        for (let tempObjectLanguageLength in languageObject) {
            let tempCreateLanguage = document.createElement('a');
            tempCreateLanguage.className = 'list-of-language';
            tempCreateLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
            tempCreateLanguage.dataset.id = languageObject[tempObjectLanguageLength].language;
            tempSectionLanguage.appendChild(tempCreateLanguage);
        }
        for (let tempIdLanguage of get('.', 'list-of-language')) {
            tempIdLanguage.addEventListener('click', () => {
                let tempDataLanguage = tempIdLanguage.dataset.id;
                for (let tempObjectLanguageLength = 0; tempObjectLanguageLength < languageObject.length; tempObjectLanguageLength++) {
                    if (tempDataLanguage === languageObject[tempObjectLanguageLength].language) {
                        let temppLanguage = get('#', 'p-language');
                        temppLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
                        trigger('showHideLanguage', {});
                    }
                }
            });
        }
    };
    on('language', function () {
        createLanguagePrivate();
    })
})();

