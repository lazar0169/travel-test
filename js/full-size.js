
function fullSize(tempthis) {
    let tempclickedCity = document.getElementsByClassName("sectionFooter");
    let tempmainSection = document.getElementById("fullScreenShow");
    let temptableDiv = document.getElementById("tableDiv");

    let tempdataID = tempthis.dataset.id;
    for (let i = 0; i < tempclickedCity.length; i++) {



        if (tempdataID == destinationObject[i].id) {

            let tempSeasons = Object.keys(destinationObject[i].seasons);

            let tempSpring = Object.keys(destinationObject[i].seasons.spring);
            let tempSummer = Object.keys(destinationObject[i].seasons.summer);
            let tempAutumn = Object.keys(destinationObject[i].seasons.autumn);
            let tempWinter = Object.keys(destinationObject[i].seasons.winter);


            let tempimageFullScreen = document.getElementById("imageFullScreen");
            let temph1FullScreenShow = document.getElementById("h1FullScreenShow");
            let temppFullScreen = document.getElementById("pFullScreen");

            temph1FullScreenShow.innerText = destinationObject[i].name;
            tempimageFullScreen.src = destinationObject[i].image;
            temppFullScreen.innerText = destinationObject[i].desc;

            for (let q = 0; q < tempSeasons.length; q++) {
                let temptablePrice = document.createElement("table");

                for (let w = 0; w < 2; w++) {

                    let temptablePriceTR = document.createElement("tr");

                    if (tempSeasons[q] == "spring") {
                        for (let spr = 0; spr < tempSpring.length; spr++) {
                            let temptablePriceTDSpring = document.createElement("td");

                            if (w == 0) {
                                temptablePriceTDSpring.innerText = tempSpring[spr];
                            }
                            else {
                                temptablePriceTDSpring.innerText = destinationObject[i].seasons[tempSeasons[q]][tempSpring[spr]];
                            }

                            temptablePriceTR.appendChild(temptablePriceTDSpring);
                        }
                        temptablePrice.appendChild(temptablePriceTR);
                    }


                    else if (tempSeasons[q] == "summer") {
                        for (let sum = 0; sum < tempSummer.length; sum++) {
                            let temptablePriceTDSummer = document.createElement("td");

                            if (w == 0) {
                                temptablePriceTDSummer.innerText = tempSummer[sum];
                            }
                            else {
                                temptablePriceTDSummer.innerText = destinationObject[i].seasons[tempSeasons[q]][tempSummer[sum]];
                            }

                            temptablePriceTR.appendChild(temptablePriceTDSummer);
                        }
                        temptablePrice.appendChild(temptablePriceTR);
                    }

                    else if (tempSeasons[q] == "autumn") {
                        for (let aut = 0; aut < tempAutumn.length; aut++) {
                            let temptablePriceTDAutumn = document.createElement("td");

                            if (w == 0) {
                                temptablePriceTDAutumn.innerText = tempAutumn[aut];
                            }
                            else {
                                temptablePriceTDAutumn.innerText = destinationObject[i].seasons[tempSeasons[q]][tempAutumn[aut]];
                            }

                            temptablePriceTR.appendChild(temptablePriceTDAutumn);
                        }
                        temptablePrice.appendChild(temptablePriceTR);
                    }

                    else if (tempSeasons[q] == "winter") {
                        for (let win = 0; win < tempWinter.length; win++) {
                            let temptablePriceTDWinter = document.createElement("td");

                            if (w == 0) {
                                temptablePriceTDWinter.innerText = tempWinter[win];
                            }
                            else {
                                temptablePriceTDWinter.innerText = destinationObject[i].seasons[tempSeasons[q]][tempWinter[win]];
                            }

                            temptablePriceTR.appendChild(temptablePriceTDWinter);
                        }
                        temptablePrice.appendChild(temptablePriceTR);
                    }

                }
                temptableDiv.appendChild(temptablePrice);
            }
            tempmainSection.style.visibility = "visible";
        }
    }
}