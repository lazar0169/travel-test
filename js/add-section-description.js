window.addEventListener("load", fullSize);
function fullSize() {
    let tempclickedCity = document.getElementsByClassName("articleSection");
    let tempmainSection = document.getElementById("fullScreenShow");

    for (let i = 0; i < tempclickedCity.length; i++) {
        
        tempclickedCity[i].onclick = function () {
            let x = tempclickedCity[i].dataset.id;
            if (x == destinationObject[i].id) {
                let tempimageFullScreen = document.getElementById("imageFullScreen");
                let temph1FullScreenShow = document.getElementById("h1FullScreenShow");
                let temppFullScreen = document.getElementById("pFullScreen");

                temph1FullScreenShow.innerText = destinationObject[i].name;
                tempimageFullScreen.src = destinationObject[i].image;
                temppFullScreen.innerText = destinationObject[i].desc;
                tempmainSection.style.visibility = "visible";
            }
        }
    }
}