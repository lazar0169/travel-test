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
        tempShowHideLanguage.style.visibility = "visible";
        document.getElementById("pButtonOpenClose").innerHTML= "&#9660";
    }
    else {
        tempShowHide = false;
        tempShowHideLanguage.style.visibility = "hidden";
        document.getElementById("pButtonOpenClose").innerHTML= "&#9650";
    }
    
}
function chosenLanguage() {
    let tempchosenLanguage = document.getElementById("pLanguage");
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
