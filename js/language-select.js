window.addEventListener('load', createLanguage);
window.addEventListener('load', showHideLanguage);
let languageObject = [
    {
        language: 'Serbian'
    },
    {
        language: 'English'
    },
    {
        language: 'Croatian'
    },
    {
        language: 'French'
    },
    {
        language: 'Montenegrin'
    },
    {
        language: 'Bulgarian'
    },
    {
        language: 'Romanian'
    },
    {
        language: 'Finnish'
    },
    {
        language: 'Arabic'
    },
    {
        language: 'Chinese'
    }
]

document.getElementById('open-close-language').addEventListener('click', showHideLanguage);

let tempShowHide = false;
function showHideLanguage() {
    var tempShowHideLanguage = document.getElementById('language')
    if (!tempShowHide) {
        tempShowHide = true;
        tempShowHideLanguage.style.visibility = 'hidden';
        document.getElementById('p-button-open-close').innerHTML = '&#9660';
    }
    else {
        tempShowHide = false;
        tempShowHideLanguage.style.visibility = 'visible';
        document.getElementById('p-button-open-close').innerHTML = ' &#9650';
    }
}

function createLanguage() {
    let tempSectionLanguage = document.getElementById('language');
    for (var tempObjectLanguageLength = 0; tempObjectLanguageLength < languageObject.length; tempObjectLanguageLength++) {
        let tempCreateLanguage = document.createElement('a');
        tempCreateLanguage.className = 'list-of-language';
        tempCreateLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
        tempCreateLanguage.setAttribute('data-language', languageObject[tempObjectLanguageLength].language)
        tempCreateLanguage.addEventListener('click', chosenLanguage);
        tempSectionLanguage.appendChild(tempCreateLanguage);
    }
}

function chosenLanguage() {
    let tempDataLanguage = this.dataset.language;
    for (let tempObjectLanguageLength = 0; tempObjectLanguageLength < languageObject.length; tempObjectLanguageLength++) {
        if (tempDataLanguage === languageObject[tempObjectLanguageLength].language) {
            let temppLanguage = document.getElementById('p-language');
            temppLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
            showHideLanguage();
        }
    }
}
