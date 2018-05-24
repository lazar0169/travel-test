
function addSection(tempelements) {
    let temprightSection = document.getElementById("rightSection");

    for (let sectionNumber = 0; sectionNumber < tempelements.length; sectionNumber++) {
        
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

        let bgImageCity = document.getElementsByClassName("articleSection");

        let tempcityName = document.createElement("section");
        tempcityName.className = "sectionFooter"
        tempcityName.setAttribute("href", "https://www.w3schools.com/html/");

        let tempcityNameHeader = document.createElement("h2");
        tempcityNameHeader.className = "h2cityNameHeader";


        let tempcityNamePar = document.createElement("p");
        tempcityNamePar.className = "descriptionText";


        let tempReadMore = document.createElement("button");
        tempReadMore.className = "readMore";
        tempReadMore.innerText = "Read more";




        tempcityName.appendChild(tempcityNameHeader);
        tempcityName.appendChild(tempcityNamePar);
        tempcityName.appendChild(tempReadMore);

        bgImageCity[sectionNumber].appendChild(tempcityName);


    }

}