
window.addEventListener("load", addSection);

function addSection() {
    let temprightSection = document.getElementById("rightSection");

    for (let sectionNumber = 0; sectionNumber < destinationObject.length; sectionNumber++) {
        let newSection = document.createElement("section");
        newSection.id = "section" + sectionNumber;


        if (sectionNumber != 0) {
            newSection.className = "articleSection";
        }
        else {
            newSection.className = "articleSection articleSectionFirst";
        }
        newSection.setAttribute("onclick", "fullSize(this)");

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




        tempcityName.appendChild(tempcityNameHeader);
        tempcityName.appendChild(tempcityNamePar);
        tempcityName.appendChild(tempReadMore);

        bgImageCity.appendChild(tempcityName);


    }

}