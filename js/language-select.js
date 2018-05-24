window.addEventListener("load", createLanguage);
window.addEventListener("load", showHideLanguage);
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

let tempShowHide = false;
function showHideLanguage() {
    var tempShowHideLanguage = document.getElementById("language")

    if (tempShowHide == false) {
        tempShowHide = true;
        tempShowHideLanguage.style.visibility = "hidden";
        document.getElementById("pButtonOpenClose").innerHTML = "&#9660";
    }
    else {
        tempShowHide = false;
        tempShowHideLanguage.style.visibility = "visible";
        document.getElementById("pButtonOpenClose").innerHTML = "&#9650";
    }
}

function createLanguage() {
    let tempSectionLanguage = document.getElementById("language");

    for (var i = 0; i < languageObject.length; i++) {
        let tempCreateLanguage = document.createElement("a");
        tempCreateLanguage.className = "listOfLanguage";
        tempCreateLanguage.innerHTML = languageObject[i].language;
        tempCreateLanguage.setAttribute("data-language", languageObject[i].language)
        tempCreateLanguage.setAttribute("onclick", "chosenLanguage(this)");
        tempSectionLanguage.appendChild(tempCreateLanguage);
    }
}

function chosenLanguage(temp) {
    let tempdataLanguage = temp.dataset.language;

    for (let i = 0; i < languageObject.length; i++) {
        if (tempdataLanguage == languageObject[i].language) {
            let temppLanguage = document.getElementById("pLanguage");
            pLanguage.innerHTML = tempdataLanguage;
            showHideLanguage()
        }
    }
}
