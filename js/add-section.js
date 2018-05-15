function addSection(numbArt) {
    let temprightSection = document.getElementById("rightSection");
    
    for (let sectionNumber = 0; sectionNumber < numbArt; sectionNumber++) {
        let newSection = document.createElement("section");
        newSection.id = "section" + sectionNumber;
        newSection.setAttribute("onclick", "fullSize()");

        if (sectionNumber != 0) {
            newSection.className = "articleSection";
        }
        else {
            newSection.className = "articleSection articleSectionFirst";
        }
        

        temprightSection.appendChild(newSection);

        let firstSection = document.getElementById("section0");
        firstSection.style.gridColumnStart = 1;
        firstSection.style.gridColumnEnd = 3;
        firstSection.style.gridRowStart = 1;
        firstSection.style.gridRowEnd = 3;

        let bgImageCity = document.getElementById("section" + sectionNumber);
        let tempcityName = document.createElement("section");
        tempcityName.className = "sectionFooter"
        tempcityName.id = "sectionFooter" + sectionNumber;
        let tempcityNameHeader = document.createElement("h2");
        tempcityNameHeader.className = "h2cityNameHeader";
        tempcityNameHeader.id = "h2cityNameHeader" + sectionNumber;
        let tempcityNamePar = document.createElement("p");
        tempcityNamePar.className = "descriptionText";

        if (sectionNumber == 0) {
            let tempK;
            let tempJ;
            let j = 0;
            tempK = destinationObject[j].rating;
            for (j = 1; j < destinationObject.length; j++) {
                tempJ = destinationObject[j].rating;
                if (tempK < tempJ) {
                    tempK = tempJ;
                    bgImageCity.style.backgroundImage = destinationObject[j].picture;
                    tempcityNamePar.innerText = destinationObject[j].desc;
                    tempcityNameHeader.innerText = destinationObject[j].name;
                }
            }
        }
        else {
            bgImageCity.style.backgroundImage = destinationObject[sectionNumber - 1].picture;
            tempcityNameHeader.innerText = destinationObject[sectionNumber - 1].name;
            tempcityNamePar.innerText = destinationObject[sectionNumber - 1].desc;
            
        }
        tempcityName.appendChild(tempcityNameHeader);
        tempcityName.appendChild(tempcityNamePar);

        bgImageCity.appendChild(tempcityName);

        addSectionDescription();
    }
    (function () {
        let tempSectionLanguage = document.getElementById("language");

        for (var i = 0; i < languageObject.length; i++) {
            let tempCreateLanguage = document.createElement("a");
            tempCreateLanguage.className = "listOfLanguage";
            tempCreateLanguage.innerHTML = languageObject[i].language;
            tempCreateLanguage.setAttribute("onclick", "chosenLanguage()");
            tempSectionLanguage.appendChild(tempCreateLanguage);

        }
    })();
    chosenLanguage();
    fullSize();

}