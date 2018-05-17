window.addEventListener("load", fullSize);
function fullSize() {
    let tempclickedCity = document.getElementsByClassName("articleSection");
    let tempmainSection = document.getElementById("fullScreenShow");
    let tempimageFullScreen = document.getElementById("imageFullScreen");
    let temph1FullScreenShow = document.getElementById("h1FullScreenShow");
    let temppFullScreen = document.getElementById("pFullScreen");

    for (let i = 0; i < tempclickedCity.length; i++) {

        tempclickedCity[i].onclick = function () {
            tempmainSection.style.visibility = "visible";
            let tempDataID = tempclickedCity[i].getAttribute("dataID");
            let tempDataNo = tempclickedCity[i].getAttribute("dataNO");
            temph1FullScreenShow.innerText = destinationObject[tempDataNo].name;
            tempimageFullScreen.src = destinationObject[tempDataNo].image;
            temppFullScreen.innerText = destinationObject[tempDataNo].desc;
        }
    }
}