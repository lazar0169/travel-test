window.addEventListener("load", fullSize);
function fullSize() {
    let tempclickedCity = document.getElementsByClassName("sectionFooter");
    let tempmainSection = document.getElementById("fullScreenShow");
    let temptableDiv = document.getElementById("tableDiv");

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
                for (let k = 0; k < 2; k++) {
                    let temptablePriceTRSpring = document.createElement("tr");
                    let temptablePriceTDSpringMarch = document.createElement("td");
                    let temptablePriceTDSpringApril = document.createElement("td");
                    let temptablePriceTDSpringMay = document.createElement("td");
                    for (let j = 0; j < 3; j++) {
                        let temptablePriceTRSpring = document.createElement("tr");
                        if (k == 0) {
                            temptablePriceTDSpringMarch.innerText = "March";
                            temptablePriceTRSpring.appendChild(temptablePriceTDSpringMarch);

                            temptablePriceTDSpringApril.innerText = "April";
                            temptablePriceTRSpring.appendChild(temptablePriceTDSpringApril)

                            temptablePriceTDSpringMay.innerText = "May";
                            temptablePriceTRSpring.appendChild(temptablePriceTDSpringMay);
                        }
                        else {

                            temptablePriceTDSpringMarch.innerText = destinationObject[i].seasons["spring"].March;
                            temptablePriceTRSpring.appendChild(temptablePriceTDSpringMarch);

                            temptablePriceTDSpringApril.innerText = destinationObject[i].seasons["spring"].April;
                            temptablePriceTRSpring.appendChild(temptablePriceTDSpringApril);

                            temptablePriceTDSpringMay.innerText = destinationObject[i].seasons["spring"].May;
                            temptablePriceTRSpring.appendChild(temptablePriceTDSpringMay);

                        }

                    }
                    temptablePriceSpring.appendChild(temptablePriceTRSpring);

                }
                temptableDiv.appendChild(temptablePriceSpring);

                let temptablePriceSummer = document.createElement("table");
                temptablePriceSummer.id = "tablePriceSummer";
                let temptablePriceTRSummer = document.createElement("tr");
                temptablePriceTRSummer.innerText = "SUMMER";
                temptablePriceSummer.appendChild(temptablePriceTRSummer);
                for (let k = 0; k < 2; k++) {
                    let temptablePriceTRSummer = document.createElement("tr");
                    let temptablePriceTDSummerJune = document.createElement("td");
                    let temptablePriceTDSummerJuly = document.createElement("td");
                    let temptablePriceTDSummerAugust = document.createElement("td");
                    for (let j = 0; j < 3; j++) {
                        if (k == 0) {
                            temptablePriceTDSummerJune.innerText = "June";
                            temptablePriceTRSummer.appendChild(temptablePriceTDSummerJune);

                            temptablePriceTDSummerJuly.innerText = "July";
                            temptablePriceTRSummer.appendChild(temptablePriceTDSummerJuly)

                            temptablePriceTDSummerAugust.innerText = "August";
                            temptablePriceTRSummer.appendChild(temptablePriceTDSummerAugust);
                        }
                        else {

                            temptablePriceTDSummerJune.innerText = destinationObject[i].seasons["summer"].June;
                            temptablePriceTRSummer.appendChild(temptablePriceTDSummerJune);

                            temptablePriceTDSummerJuly.innerText = destinationObject[i].seasons["summer"].July;
                            temptablePriceTRSummer.appendChild(temptablePriceTDSummerJuly);

                            temptablePriceTDSummerAugust.innerText = destinationObject[i].seasons["summer"].August;
                            temptablePriceTRSummer.appendChild(temptablePriceTDSummerAugust);
                        }
                    }
                    temptablePriceSummer.appendChild(temptablePriceTRSummer);
                }
                temptableDiv.appendChild(temptablePriceSummer);

                let temptablePriceAutumn = document.createElement("table");
                temptablePriceAutumn.id = "tablePriceAutumn";
                let temptablePriceTRAutumn = document.createElement("tr");
                temptablePriceTRAutumn.innerText = "AUTUMN";
                temptablePriceAutumn.appendChild(temptablePriceTRAutumn);
                for (let k = 0; k < 2; k++) {
                    let temptablePriceTRAutumn = document.createElement("tr");
                    let temptablePriceTDAutumnSeptember = document.createElement("td");
                    let temptablePriceTDAutumnOctober = document.createElement("td");
                    let temptablePriceTDAutumnNovember = document.createElement("td");
                    for (let j = 0; j < 3; j++) {
                        if (k == 0) {
                            temptablePriceTDAutumnSeptember.innerText = "September";
                            temptablePriceTRAutumn.appendChild(temptablePriceTDAutumnSeptember);

                            temptablePriceTDAutumnOctober.innerText = "October";
                            temptablePriceTRAutumn.appendChild(temptablePriceTDAutumnOctober)

                            temptablePriceTDAutumnNovember.innerText = "November";
                            temptablePriceTRAutumn.appendChild(temptablePriceTDAutumnNovember);
                        }
                        else {
                            temptablePriceTDAutumnSeptember.innerText = destinationObject[i].seasons["autumn"].September;
                            temptablePriceTRAutumn.appendChild(temptablePriceTDAutumnSeptember);

                            temptablePriceTDAutumnOctober.innerText = destinationObject[i].seasons["autumn"].October;
                            temptablePriceTRAutumn.appendChild(temptablePriceTDAutumnOctober);

                            temptablePriceTDAutumnNovember.innerText = destinationObject[i].seasons["autumn"].November;
                            temptablePriceTRAutumn.appendChild(temptablePriceTDAutumnNovember);
                        }
                    }
                    temptablePriceAutumn.appendChild(temptablePriceTRAutumn);
                }
                temptableDiv.appendChild(temptablePriceAutumn);

                let temptablePriceWinter = document.createElement("table");
                temptablePriceWinter.id = "tablePriceWinter";
                let temptablePriceTRWinter = document.createElement("tr");
                temptablePriceTRWinter.innerText = "WINTER";
                temptablePriceWinter.appendChild(temptablePriceTRWinter);
                for (let k = 0; k < 2; k++) {
                    let temptablePriceTRWinter = document.createElement("tr");
                    let temptablePriceTDWinterDecember = document.createElement("td");
                    let temptablePriceTDWinterJanuary = document.createElement("td");
                    let temptablePriceTDWinterFebruary = document.createElement("td");
                    for (let j = 0; j < 3; j++) {
                        if (k == 0) {
                            temptablePriceTDWinterDecember.innerText = "September";
                            temptablePriceTRWinter.appendChild(temptablePriceTDWinterDecember);

                            temptablePriceTDWinterJanuary.innerText = "October";
                            temptablePriceTRWinter.appendChild(temptablePriceTDWinterJanuary)

                            temptablePriceTDWinterFebruary.innerText = "November";
                            temptablePriceTRWinter.appendChild(temptablePriceTDWinterFebruary);
                        }
                        else {
                            temptablePriceTDWinterDecember.innerText = destinationObject[i].seasons["winter"].December;
                            temptablePriceTRWinter.appendChild(temptablePriceTDWinterDecember);

                            temptablePriceTDWinterJanuary.innerText = destinationObject[i].seasons["winter"].January;
                            temptablePriceTRWinter.appendChild(temptablePriceTDWinterJanuary);

                            temptablePriceTDWinterFebruary.innerText = destinationObject[i].seasons["winter"].February;
                            temptablePriceTRWinter.appendChild(temptablePriceTDWinterFebruary);
                        }
                    }
                    temptablePriceWinter.appendChild(temptablePriceTRWinter);
                }
                temptableDiv.appendChild(temptablePriceWinter);
                tempmainSection.appendChild(tableDiv);
                tempmainSection.style.visibility = "visible";
            }
        }
    }
}