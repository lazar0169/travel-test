let tempX;
let temparray1 = [];
let tempArray = [];
let sectionNumber = 0;
function addSectionDescription() {
    let ArtDesc = document.getElementsByClassName("articleSection");
    let addSectDesc = document.createElement("section");
    addSectDesc.id = "sectionDescription" + sectionNumber;
    addSectDesc.className = "sectionDescription";

    let tempCity = document.createElement("section");
    tempCity.className = "sectionDescriptionCity";
    tempCity.id = "sectionDescriptionCity" + sectionNumber;

    let tempText = document.createElement("section");
    tempText.className = "sectionDescriptionText";
    tempCity.id = "sectionDescriptionText" + sectionNumber;

    let tempReadMore = document.createElement("section");
    tempReadMore.className = "readMore";
    tempReadMore.id = "readMore" + sectionNumber;

    let tempReadMore1 = document.createElement("section");
    tempReadMore1.className = "readMore1";
    tempReadMore1.id = "readMore1" + sectionNumber;
    tempReadMore1.innerHTML = "Read more";

    addSectDesc.setAttribute("onclick", "fullSize()");

    if (sectionNumber == 0) {
        let tempK;
        let tempJ;
        let j = 0;
        tempK = destinationObject[j].rating;
        for (j = 1; j < destinationObject.length; j++) {
            tempJ = destinationObject[j].rating;
            if (tempK < tempJ) {
                tempK = tempJ;
                tempText.innerHTML = destinationObject[j].desc;
                tempCity.innerHTML = destinationObject[j].name;
            }
        }
    }
    else {
        tempText.innerHTML = destinationObject[sectionNumber - 1].desc;
        tempCity.innerHTML = destinationObject[sectionNumber - 1].name;
    }

    tempReadMore.appendChild(tempReadMore1);
    tempText.appendChild(tempReadMore);
    addSectDesc.appendChild(tempCity);
    addSectDesc.appendChild(tempText);
    ArtDesc[sectionNumber].appendChild(addSectDesc);

    sectionNumber++;
}
function fullSize() {
    let temprightSection = document.getElementById("mainSection");
    let tempfullSize = document.createElement("section");
    let tempLeftSection = document.getElementById("leftSection");
    tempLeftSection.style.visibility = "hidden";
    tempfullSize.id = "fullSize";
    tempfullSize.innerHTML = destinationObject[3].desc
    temprightSection.appendChild(tempfullSize);
}