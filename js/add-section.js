function addSection(numbArt) {

    for (let sectionNumber = 0; sectionNumber < numbArt; sectionNumber++) {
        let temprightSection = document.getElementById("rightSection");
        let newSection = document.createElement("section");
        newSection.id = "section" + sectionNumber;
        newSection.setAttribute("onclick", "fullSize()");

        if (sectionNumber != 0) {
            newSection.className = "articleSection";
        }
        else {
            newSection.className = "articleSection articleSectionFirst";
        }
        temprightSection.style.display = "grid";
        temprightSection.style.gridTemplateColumns = "auto auto auto";
        temprightSection.style.gridGap = "0.5%";
        temprightSection.style.padding = "0.5%";
        temprightSection.appendChild(newSection);

        let firstSection = document.getElementById("section0");
        firstSection.style.gridColumnStart = 1;
        firstSection.style.gridColumnEnd = 3;
        firstSection.style.gridRowStart = 1;
        firstSection.style.gridRowEnd = 3;

        let bgImageCity = document.getElementById("section" + sectionNumber);
        bgImageCity.style.backgroundImage = destinationObject[sectionNumber].picture;

        let tempcityName = document.createElement("footer");
        tempcityName.className = "articleFooter"
        tempcityName.id = "articleFooter" + sectionNumber;
        tempcityName.innerHTML = destinationObject[sectionNumber].name;
        bgImageCity.appendChild(tempcityName);

        addSectionDescription();
    }
    (function () {
        let tempSectionLanguage = document.getElementById("sectionLanguage1");

        for (var i = 0; i < languageObject.length; i++) {
            let tempCreateLanguage = document.createElement("section");
            tempCreateLanguage.className = "listOfLanguage";
            tempCreateLanguage.innerHTML = languageObject[i].language;
            tempCreateLanguage.setAttribute("onclick", "chosenLanguage()");
            tempSectionLanguage.appendChild(tempCreateLanguage);

        }
    })();
    chosenLanguage();

}