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
        language: 'Francuski'
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

    var tempShowHideLanguage = document.getElementById("sectionLanguage1")
    if (tempShowHide == false) {
        tempShowHide = true;
        tempShowHideLanguage.style.display = "flex";
    }
    else {
        tempShowHide = false;
        tempShowHideLanguage.style.display = "none";
    }
}
function chosenLanguage() {
    let tempchosenLanguage = document.getElementById("selectLanguage");
    let tempchoseLanguage = document.getElementsByClassName("listOfLanguage");

    for (let i = 0; i < tempchoseLanguage.length; i++) {

        (function (index) {
            tempchoseLanguage[i].onclick = function () {

                let x = tempchoseLanguage[index].textContent;
                tempchosenLanguage.innerText = x;
                showHideLanguage();
            }
        })(i);
    }

}
