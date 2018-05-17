window.addEventListener("load", createTable);
function createTable() {

    let temptablePrice = document.getElementById("tablePrice");
    // let temptablePriceTD = document.createElement("td");
    // let temptablePriceTR = document.createElement("tr");
    // temptablePriceTD.innerText = "Season/Month";
    // temptablePriceTR.appendChild(temptablePriceTD);
    // temptablePrice.appendChild(temptablePriceTR);

    for (let i = 0; i < 12; i++) {
        let temptablePriceTR = document.createElement("tr")
        let temptablePriceTD = document.createElement("td");

        temptablePriceTD.innerText = destinationObject[i].seasons["spring"]["May"];

        temptablePriceTR.appendChild(temptablePriceTD);
        temptablePrice.appendChild(temptablePriceTR);





    }






    // // i for season, j for month 
    // for (let i = 0; i < 4; i++) {
    //     for (let j = 0; j < 3; j++) {

    //     }
    // }

}