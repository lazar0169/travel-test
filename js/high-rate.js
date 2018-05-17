window.addEventListener("load", highRate);
function highRate() {
    let temparticleSection = document.getElementsByClassName("articleSection");
    let temph2cityNameHeader = document.getElementsByClassName("h2cityNameHeader");
    let tempdescriptionText = document.getElementsByClassName("descriptionText");

    let tempDataNo = temparticleSection[0].getAttribute("dataNO");
    let tempDataID = temparticleSection[0].getAttribute("dataID");
    let tempDataNoHigh;
    let tempDataIdHigh;

    let temparticleSectionX;
    let tempdescriptionTextX;
    let temph2cityNameHeaderX;

    let tempRating = destinationObject[0].rating;

    for (let i = 1; i < temparticleSection.length; i++) {
        let tempDataNoX = temparticleSection[i].getAttribute("dataNO");
        let tempDataIDX = temparticleSection[i].getAttribute("dataID");
        let tempRatingX = destinationObject[i].rating;

        if (tempRating < tempRatingX) {
            tempRating = tempRatingX;

            tempDataNoHigh = tempDataNoX;
            tempDataNoX = tempDataNo;
            tempDataNo = tempDataNoHigh;

            tempDataIdHigh = tempDataIDX;
            tempDataIDX = tempDataID;
            tempDataID = tempDataIdHigh;

            temparticleSectionX = temparticleSection[0].backgroundImage;
            tempdescriptionTextX = tempdescriptionText[0].innerText;
            temph2cityNameHeaderX = temph2cityNameHeader[0].innerText;

            temparticleSection[0].style.backgroundImage = destinationObject[tempDataNo].picture;
            tempdescriptionText[0].innerText = destinationObject[tempDataNo].desc;
            temph2cityNameHeader[0].innerText = destinationObject[tempDataNo].name;
            temparticleSection[0].setAttribute("dataNO", tempDataNo);
            temparticleSection[0].setAttribute("dataID", tempDataID);

            temparticleSection[i].style.backgroundImage = temparticleSectionX;
            tempdescriptionText[i].innerText = tempdescriptionTextX;
            temph2cityNameHeader[i].innerText = temph2cityNameHeaderX;
            temparticleSection[i].setAttribute("dataNO", tempDataNoX);
            temparticleSection[i].setAttribute("dataID", tempDataIDX);


        }
    }
}



