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
function fullSize() {
    let temprightSection = document.getElementById("mainSection");
    let tempfullSize = document.createElement("section");
    let tempLeftSection = document.getElementById("leftSection");
    tempLeftSection.style.visibility = "hidden";
    tempfullSize.id = "fullSize";

    let clickedCity = document.getElementsByClassName("articleGrid");

    for (let i = 0; i < clickedCity.length; i++) {

        (function (index) {
            clickedCity[i].onclick = function () {

                let x = tempchoseLanguage[index].textContent;
                tempchosenLanguage.innerText = x;
                showHideLanguage();
            }
        })(i);
    }

}
let temprightSection = document.getElementById("mainSection");
    let tempfullSize = document.createElement("section");
    let tempLeftSection = document.getElementById("leftSection");
    tempLeftSection.style.visibility = "hidden";
    tempfullSize.id = "fullSize";
    tempfullSize.innerHTML = destinationObject[3].desc
    temprightSection.appendChild(tempfullSize);