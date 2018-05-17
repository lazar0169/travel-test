
function fullSize() {
    let tempclickedCity = document.getElementsByClassName("articleSection");
    let tempmainSection = document.getElementById("fullScreenShow");
    let tempimageFullScreen = document.getElementById("imageFullScreen");
    let temph1FullScreenShow = document.getElementById("h1FullScreenShow");
    let temppFullScreen = document.getElementById("pFullScreen");

    for (let i = 0; i < tempclickedCity.length; i++) {

        tempclickedCity[i].onclick = function () {
            tempmainSection.style.visibility = "visible";
            if (i != 0) {
                temph1FullScreenShow.innerText = destinationObject[i - 1].name;
                tempimageFullScreen.src = destinationObject[i - 1].image;
                temppFullScreen.innerText = destinationObject[i - 1].desc;
            }
            // else{temph1FullScreenShow.innerText = destinationObject[hightRating].name;
            //     tempimageFullScreen.src = destinationObject[hightRating].image;
            //     temppFullScreen.innerText = destinationObject[hightRating].desc;

            // }


        }
        // (function (index) {

        // })(i);
    }
}