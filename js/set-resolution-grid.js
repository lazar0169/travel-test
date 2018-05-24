window.addEventListener("load", resizeGrid);
window.addEventListener("resize", resizeGrid);
function resizeGrid() {
    let tempmainSection = document.getElementById("mainSection");
    let tempmainSectionA = mainSection.clientWidth;
    let tempmainSectionB = mainSection.clientHeight;

    let tempLanguage = document.getElementById("language");
    let tempLanguage1 = document.getElementById("openCloseLanguage");


    let tempfontSize = tempmainSectionA * 0.015 + "px";
   

    tempmainSection.style.fontSize = tempfontSize;
    tempLanguage1.style.fontSize = tempfontSize;

    if (tempmainSectionA / tempmainSectionB > 16 / 9) {
        let tempResize = document.getElementById("rightSection");
        let tempResizeA = rightSection.clientWidth;
        let tempResizeB = rightSection.clientHeight;
        let tempSection = document.getElementsByClassName("articleSection");

        for (let i = 0; i < tempSection.length; i++) {
            if (i != 0) {
                tempSection[i].style.height = tempResizeB / 3 + "px";
                tempSection[i].style.width = tempResizeA / 3 + "px";
            }
            else {
                tempSection[i].style.height = ((tempResizeB * 2) / 3) + 3 + "px";
                tempSection[i].style.width = ((tempResizeA * 2) / 3) + 3 + "px";
            }
        }
    }
    else {
        let tempResize = document.getElementById("rightSection");
        let tempResizeA = rightSection.clientWidth;
        let tempResizeB = rightSection.clientHeight;
        let tempSection = document.getElementsByClassName("articleSection");

        for (let i = 0; i < tempSection.length; i++) {
            if (i != 0) {
                tempSection[i].style.height = tempResizeB / 3 + "px";
                tempSection[i].style.width = tempResizeA / 3 + "px";

            }
            else {
                tempSection[i].style.height = ((tempResizeB * 2) / 3) + 3 + "px";
                tempSection[i].style.width = ((tempResizeA * 2) / 3) + 3 + "px";
            }
        }
    }

    let tempSection = document.getElementsByClassName("articleSection ");
    let tempcityNameHeaderH2 = document.getElementsByClassName("h2cityNameHeader");

    for (let i = 0; i < tempSection.length; i++) {
        let tempSectionA = tempSection[i].clientHeight;
        tempcityNameHeaderH2[i].style.height = tempSectionA * 0.2 + "px";
        tempcityNameHeaderH2[i].style.fontSize = tempSectionA * 0.15 + "px"
    }
}