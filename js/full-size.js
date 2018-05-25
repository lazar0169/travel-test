window.addEventListener("load", fullSize);

function fullSize() {
    let tempmainSection = document.getElementById("fullScreenShow");
    let temptableDiv = document.getElementById("tableDiv");

    let maxJan;
    let maxFeb;
    let maxMarch;
    let maxMay;
    let maxApril;
    let maxJune;
    let maxJuly;
    let maxAugust;
    let maxSep;
    let maxOct;
    let maxNov;
    let maxDec;

    let params = new URLSearchParams(document.location.search.substring(1));
    let tempdataID = params.get("id");

    for (let i = 0; i < destinationObject.length; i++) {
        if (tempdataID == destinationObject[i].id) {
            let tempSeasons = Object.keys(destinationObject[i].seasons);

            let tempimageFullScreen = document.getElementById("imageFullScreen");
            let temph1FullScreenShow = document.getElementById("h1FullScreenShow");
            let temppFullScreen = document.getElementById("pFullScreen");

            temph1FullScreenShow.innerText = destinationObject[i].name;
            tempimageFullScreen.src = destinationObject[i].image;
            temppFullScreen.innerText = destinationObject[i].desc;

            for (let q = 0; q < tempSeasons.length; q++) {
                let tempParSeason = document.createElement("h1");
                tempParSeason.className = "h1tablePrice";
                let temptablePrice = document.createElement("table");

                if (tempSeasons[q] == "spring") {
                    let maxValue;
                    let tempSpring = Object.keys(destinationObject[i].seasons.spring);

                    maxMarch = destinationObject[i].seasons.spring.March.length;
                    maxApril = destinationObject[i].seasons.spring.April.length;
                    maxMay = destinationObject[i].seasons.spring.May.length;

                    if (maxMarch > maxApril && maxMarch > maxMay) {
                        maxValue = maxMarch;
                    }
                    else if (maxApril > maxMay) {
                        maxValue = maxApril
                    }
                    else {
                        maxValue = maxMay;
                    }

                    for (let w = 0; w < maxValue + 1; w++) {
                        let temptablePriceTR = document.createElement("tr");

                        for (let spr = 0; spr < tempSpring.length; spr++) {
                            tempParSeason.innerText = tempSeasons[q];
                            let temptablePriceTDSpring = document.createElement("td");

                            if (w == 0) {
                                temptablePriceTDSpring.innerText = tempSpring[spr];
                            }
                            else {
                                temptablePriceTDSpring.innerText = destinationObject[i].seasons.spring[tempSpring[spr]][w - 1];
                            }
                            if (temptablePriceTDSpring.textContent != "undefined") {
                                temptablePriceTR.appendChild(temptablePriceTDSpring);
                            }
                            else {
                                temptablePriceTDSpring.innerText = "/"
                                temptablePriceTR.appendChild(temptablePriceTDSpring);
                            }
                        }
                        temptablePrice.appendChild(temptablePriceTR);
                    }
                }

                else if (tempSeasons[q] == "summer") {
                    let maxValue;
                    let tempSummer = Object.keys(destinationObject[i].seasons.summer);

                    maxJune = destinationObject[i].seasons.summer.June.length;
                    maxJuly = destinationObject[i].seasons.summer.July.length;
                    maxAugust = destinationObject[i].seasons.summer.August.length;

                    if (maxJune > maxJuly && maxJune > maxAugust) {
                        maxValue = maxJune;
                    }
                    else if (maxJuly > maxAugust) {
                        maxValue = maxJuly
                    }
                    else {
                        maxValue = maxAugust;
                    }

                    for (let w = 0; w < maxValue + 1; w++) {
                        let temptablePriceTR = document.createElement("tr");

                        for (let sum = 0; sum < tempSummer.length; sum++) {
                            tempParSeason.innerText = tempSeasons[q];
                            let temptablePriceTDSummer = document.createElement("td");

                            if (w == 0) {
                                temptablePriceTDSummer.innerText = tempSummer[sum];
                            }
                            else {
                                temptablePriceTDSummer.innerText = destinationObject[i].seasons.summer[tempSummer[sum]][w - 1];;
                            }
                            if (temptablePriceTDSummer.textContent != "undefined") {
                                temptablePriceTR.appendChild(temptablePriceTDSummer);
                            }
                            else {
                                temptablePriceTDSummer.innerText = "/"
                                temptablePriceTR.appendChild(temptablePriceTDSummer);
                            }
                        }
                        temptablePrice.appendChild(temptablePriceTR);
                    }
                }

                else if (tempSeasons[q] == "autumn") {
                    let maxValue;
                    let tempAutumn = Object.keys(destinationObject[i].seasons.autumn);

                    maxSep = destinationObject[i].seasons.autumn.September.length;
                    maxOct = destinationObject[i].seasons.autumn.October.length;
                    maxNov = destinationObject[i].seasons.autumn.November.length;

                    if (maxSep > maxOct && maxSep > maxNov) {
                        maxValue = maxSep;
                    }
                    else if (maxOct > maxNov) {
                        maxValue = maxOct
                    }
                    else {
                        maxValue = maxNov;
                    }

                    for (let w = 0; w < maxValue + 1; w++) {
                        let temptablePriceTR = document.createElement("tr");

                        for (let aut = 0; aut < tempAutumn.length; aut++) {
                            tempParSeason.innerText = tempSeasons[q];
                            let temptablePriceTDAutumn = document.createElement("td");

                            if (w == 0) {
                                temptablePriceTDAutumn.innerText = tempAutumn[aut];
                            }
                            else {
                                temptablePriceTDAutumn.innerText = destinationObject[i].seasons.autumn[tempAutumn[aut]][w - 1];
                            }
                            if (temptablePriceTDAutumn.textContent != "undefined") {
                                temptablePriceTR.appendChild(temptablePriceTDAutumn);
                            }
                            else {
                                temptablePriceTDAutumn.innerText = "/"
                                temptablePriceTR.appendChild(temptablePriceTDAutumn);
                            }
                        }
                        temptablePrice.appendChild(temptablePriceTR);
                    }
                }

                else if (tempSeasons[q] == "winter") {
                    let maxValue;
                    let tempWinter = Object.keys(destinationObject[i].seasons.winter);

                    maxJan = destinationObject[i].seasons.winter.January.length;
                    maxFeb = destinationObject[i].seasons.winter.February.length;
                    maxDec = destinationObject[i].seasons.winter.December.length;

                    if (maxJan > maxFeb && maxJan > maxMarch) {
                        maxValue = maxJan;
                    }
                    else if (maxFeb > maxDec) {
                        maxValue = maxFeb
                    }
                    else {
                        maxValue = maxDec;
                    }

                    for (let w = 0; w < maxValue + 1; w++) {
                        let temptablePriceTR = document.createElement("tr");

                        for (let win = 0; win < tempWinter.length; win++) {
                            tempParSeason.innerText = tempSeasons[q];
                            let temptablePriceTDWinter = document.createElement("td");

                            if (w == 0) {
                                temptablePriceTDWinter.innerText = tempWinter[win];
                            }
                            else {
                                temptablePriceTDWinter.innerText = destinationObject[i].seasons.winter[tempWinter[win]][w - 1];
                            }
                            if (temptablePriceTDWinter.textContent != "undefined") {
                                temptablePriceTR.appendChild(temptablePriceTDWinter);
                            }
                            else {
                                temptablePriceTDWinter.innerText = "/"
                                temptablePriceTR.appendChild(temptablePriceTDWinter);
                            }
                        }
                        temptablePrice.appendChild(temptablePriceTR);
                    }
                }
                temptableDiv.appendChild(tempParSeason)
                temptableDiv.appendChild(temptablePrice);
            }
        }
    }
    setResolution();
}