var highRating = 0;
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

        let bgImageCity = document.getElementById("section" + sectionNumber);
        let tempcityName = document.createElement("section");
        tempcityName.className = "sectionFooter"
        tempcityName.id = "sectionFooter" + sectionNumber;

        let tempcityNameHeader = document.createElement("h2");
        tempcityNameHeader.className = "h2cityNameHeader";
        tempcityNameHeader.id = "h2cityNameHeader" + sectionNumber;

        let tempcityNamePar = document.createElement("p");
        tempcityNamePar.className = "descriptionText";

        let tempReadMore = document.createElement("button");
        tempReadMore.className = "readMore";
        tempReadMore.id = "readMore" + sectionNumber;
        tempReadMore.innerText = "Read more";

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
        tempcityName.appendChild(tempReadMore);

        bgImageCity.appendChild(tempcityName);

    }
    chosenLanguage();
    fullSize();

}