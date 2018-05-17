
window.addEventListener("resize", setResolution);
window.addEventListener("load", setResolution);


function setResolution() {
    let tempBody = document.getElementsByTagName("body");
    let tempmainSection = document.getElementById("mainSection");
    let a = tempBody[0].clientWidth;
    let b = tempBody[0].clientHeight;
    let c = a / b;
    const d = 16 / 9;
    let g = d - c;
    if (c > d) {
        let a1;
        a1 = b * (16 / 9) + "px";
        tempBody[0].style.display = "flex";
        tempBody[0].style.justifyContent = "center";
        tempBody[0].style.alignItems = "center";
        tempmainSection.style.width = a1;
        tempmainSection.style.height = "100%";
        resizeGrid();
    }
    else {
        let b1;
        b1 = a / (16 / 9) + "px";
        tempBody[0].style.display = "flex";
        tempBody[0].style.justifyContent = "center";
        tempBody[0].style.alignItems = "center";
        tempmainSection.style.height = b1;
        tempmainSection.style.width = "100%";
        resizeGrid();
    }

    function resizeGrid() {
        let tempmainSection = document.getElementById("mainSection");
        let tempmainSectionA = mainSection.clientWidth;
        let tempmainSectionB = mainSection.clientHeight;


        let tempLanguage = document.getElementById("language");
        let tempLanguage1 = document.getElementById("openCloseLanguage");
        let temph1FullScreenShow = document.getElementById("h1FullScreenShow");
        let tempfullScreenBackButton = document.getElementById("fullScreenBackButton");
        let temppFullScreen = document.getElementById("pFullScreen");

        let tempfontSize = tempmainSectionA * 0.015 + "px";
        let tempBackButtonFontSize = mainSection.clientWidth * 0.038 + "px";
        let temph1FontSize = tempmainSectionA * 0.1 + "px";

        tempmainSection.style.fontSize = tempfontSize;
        tempLanguage1.style.fontSize = tempfontSize;
        temppFullScreen.style.fontSize = tempfontSize;
        temph1FullScreenShow.style.fontSize = temph1FontSize;
        tempfullScreenBackButton.style.fontSize = tempBackButtonFontSize;

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
        }
    }
}
