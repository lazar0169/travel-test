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


                let temptablePriceSpring = document.createElement("table");
                temptablePriceSpring.id = "tablePriceSpring";
                let temptablePriceTRSpring = document.createElement("tr");
                temptablePriceTRSpring.innerText = "SPRING";
                temptablePriceSpring.appendChild(temptablePriceTRSpring);

                for (let i = 0; i < 2; i++) {
                    let temptablePriceTRSpring = document.createElement("tr");
                    for (let j = 0; j < 3; j++) {
                        let temptablePriceTDSpring = document.createElement("td");
                        temptablePriceTDSpring.innerText = i + " , " + j;
                        temptablePriceTRSpring.appendChild(temptablePriceTDSpring)
                    }
                    temptablePriceSpring.appendChild(temptablePriceTRSpring);
                    
                }
                tempmainSection.appendChild(temptablePriceSpring);
                


                let temptablePriceSummer = document.createElement("table");
                temptablePriceSummer.id = "tablePriceSummer";
                let temptablePriceTRSummer = document.createElement("tr");
                let temptablePriceTDSummer = document.createElement("td");
                temptablePriceTRSummer.innerText = "SUMMER";
                temptablePriceSummer.appendChild(temptablePriceTRSummer);

                for (let i = 0; i < 2; i++) {
                    let temptablePriceTRSummer = document.createElement("tr");
                    for (let j = 0; j < 3; j++) {
                        let temptablePriceTDSummer = document.createElement("td");
                        temptablePriceTDSummer.innerText = i + " , " + j;
                        temptablePriceTRSummer.appendChild(temptablePriceTDSummer)
                    }
                    temptablePriceSummer.appendChild(temptablePriceTRSummer);
                    
                }
                tempmainSection.appendChild(temptablePriceSummer);


                let temptablePriceAutumn = document.createElement("table");
                temptablePriceAutumn.id = "tablePriceAutumn";
                let temptablePriceTRAutumn = document.createElement("tr");
                temptablePriceTRAutumn.innerText = "AUTUMN";
                temptablePriceAutumn.appendChild(temptablePriceTRAutumn);

                tempmainSection.appendChild(temptablePriceAutumn);


                let temptablePriceWinter = document.createElement("table");
                temptablePriceWinter.id = "tablePriceWinter";
                let temptablePriceTRWinter = document.createElement("tr");
                temptablePriceTRWinter.innerText = "WINTER";
                temptablePriceWinter.appendChild(temptablePriceTRWinter);

                tempmainSection.appendChild(temptablePriceWinter);






                tempmainSection.style.visibility = "visible";
            }
        }
    }
}