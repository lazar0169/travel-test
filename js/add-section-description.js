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
    tempText.id = "sectionDescriptionText" + sectionNumber;

    let tempReadMore = document.createElement("section");
    tempReadMore.className = "readMore";
    tempReadMore.id = "readMore" + sectionNumber;

    let tempReadMoreX = document.createElement("section");
    tempReadMoreX.className = "readMoreX";
    tempReadMoreX.id = "readMoreX" + sectionNumber;
    tempReadMoreX.innerHTML = "Read more";

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

    tempReadMore.appendChild(tempReadMoreX);
    tempText.appendChild(tempReadMore);
    addSectDesc.appendChild(tempCity);
    addSectDesc.appendChild(tempText);
    ArtDesc[sectionNumber].appendChild(addSectDesc);

    sectionNumber++;
}
function fullSize() {


    let tempclickedCity = document.getElementsByClassName("articleSection ");

    for (let i = 0; i < tempclickedCity.length; i++) {

        (function (index) {

            tempclickedCity[i].onclick = function () {
                let tempmainSection = document.getElementById("mainSection");
                tempmainSection.style.backgroundColor = "gray";
                tempmainSection.style.overflow = "hidden";
                let tempfullSize = document.createElement("section");
                let tempLeftSection = document.getElementById("leftSection");
                let temprightSection = document.getElementById("rightSec");
                temprightSection.style.visibility = "hidden";
                tempLeftSection.style.visibility = "hidden";
                tempfullSize.id = "fullSize";
                let tempreadMore = document.getElementById("readMore" + index);
                tempreadMore.style.visibility = "hidden";
                let tempsectionDescriptionCity = document.getElementById("sectionDescriptionCity" + index);
                tempsectionDescriptionCity.style.backgroundColor = "rgb(142, 142, 142)";
                tempfullSize.style.backgroundColor = "transparent";




                let tempsectionDescriptionText = document.getElementById("sectionDescriptionText" + index);
                tempsectionDescriptionText.style.overflow = "auto";
                tempsectionDescriptionText.style.pointerEvents = "auto";
                tempsectionDescriptionText.style.cursor = "default";

                let tempsectionDescription = document.getElementsByClassName("sectionDescription");
    
                let x = tempsectionDescription[index].innerHTML;
                tempfullSize.innerHTML = x;

                tempmainSection.appendChild(tempfullSize);
                
            }
        })(i);
    }

}