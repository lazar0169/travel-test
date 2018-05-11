window.addEventListener("resize", setResolution);
window.addEventListener("load", setResolution);



function setResolution() {
    let tempmainS = document.getElementById("mainS");
    let tempmainSection = document.getElementById("mainSection");
    let a = mainS.clientWidth;
    let b = mainS.clientHeight;
    let c = a / b;
    const d = 16 / 9;
    let g = d - c;
    if (c > d) {
        let a1;
        a1 = b * (16 / 9) + "px";
        tempmainS.style.display = "flex";
        tempmainS.style.justifyContent = "center";
        tempmainSection.style.width = a1;
        tempmainSection.style.height = "100%";
        resizeGrid();
    }
    else {
        let b1;
        b1 = a / (16 / 9) + "px";
        tempmainS.style.display = "flex";
        tempmainS.style.alignItems = "center";
        tempmainSection.style.height = b1;
        tempmainSection.style.width = "100%";
        resizeGrid();
    }

    function resizeGrid() {
        let tempmainSection = document.getElementById("mainSection");
        let tempmainSectionA = mainSection.clientWidth;
        let tempmainSectionB = mainSection.clientHeight;

        let tempLanguage = document.getElementById("selectLanguage");
        let tempLanguage1 = document.getElementById("selectLanguage1");
        var tempfontSize = tempmainSectionA * 0.015 + "px";
        tempmainSection.style.fontSize = tempfontSize;
        tempLanguage.style.fontSize = tempfontSize;
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
                    tempSection[i].style.height = ((tempResizeB + 5) * 2) / 3 + "px";
                    tempSection[i].style.width = ((tempResizeA + 5) * 2) / 3 + "px";
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
                    tempSection[i].style.height = ((tempResizeB + 5) * 2) / 3 + "px";
                    tempSection[i].style.width = ((tempResizeA + 5) * 2) / 3 + "px";
                }
            }
        }
    }
}
