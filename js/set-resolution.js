window.addEventListener("resize", setResolution);
function setResolution() {
    let tempBody = document.getElementsByTagName("body");
    let tempmainSection = document.getElementById("mainSection");
    let a = tempBody[0].clientWidth;
    let b = tempBody[0].clientHeight;
    let c = a / b;
    const d = 16 / 9;
    let g = d - c;

    if (c >= d) {
        let a1;
        a1 = b * d + "px";
        tempBody[0].style.display = "flex";
        tempBody[0].style.justifyContent = "center";
        tempBody[0].style.alignItems = "center";
        tempmainSection.style.width = a1;
        tempmainSection.style.height = "100%";

    }
    else {
        let b1;
        b1 = a / d + "px";
        tempBody[0].style.display = "flex";
        tempBody[0].style.justifyContent = "center";
        tempBody[0].style.alignItems = "center";
        tempmainSection.style.height = b1;
        tempmainSection.style.width = "100%";
    }
}


