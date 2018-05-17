


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

        let tempDataID = document.getElementsByClassName("articleSection");

        bgImageCity.style.backgroundImage = destinationObject[sectionNumber].picture;
        tempcityNameHeader.innerText = destinationObject[sectionNumber].name;
        tempcityNamePar.innerText = destinationObject[sectionNumber].desc;
        tempDataID[sectionNumber].setAttribute("dataID", destinationObject[sectionNumber].id);
        tempDataID[sectionNumber].setAttribute("dataNO", sectionNumber);

        tempcityName.appendChild(tempcityNameHeader);
        tempcityName.appendChild(tempcityNamePar);
        tempcityName.appendChild(tempReadMore);

        bgImageCity.appendChild(tempcityName);


    }

}