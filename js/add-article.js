function addArticle(numbArt) {

    for (let articleNumber = 0; articleNumber < numbArt; articleNumber++) {
        let temprightSection = document.getElementById("rightSection");
        let newArticle = document.createElement("article");
        newArticle.id = "article" + articleNumber;

        if (articleNumber != 0) {
            newArticle.className = "articleGrid";
        }
        else {
            newArticle.className = "articleGrid articleGridFirst";
        }
        temprightSection.style.display = "grid";
        temprightSection.style.gridTemplateColumns = "auto auto auto";
        temprightSection.style.gridGap = "0.5%";
        temprightSection.style.padding = "0.5%";
        temprightSection.appendChild(newArticle);

        let firstArticle = document.getElementById("article0");
        firstArticle.style.gridColumnStart = 1;
        firstArticle.style.gridColumnEnd = 3;
        firstArticle.style.gridRowStart = 1;
        firstArticle.style.gridRowEnd = 3;

        let bgImageCity = document.getElementById("article" + articleNumber);
        bgImageCity.style.backgroundImage = destinationObject[articleNumber].picture;

        let tempcityName = document.createElement("footer");
        tempcityName.className = "articleFooter"
        tempcityName.id = "articleFooter" + articleNumber;
        tempcityName.innerHTML = destinationObject[articleNumber].name;
        bgImageCity.appendChild(tempcityName);

        addArticleDescription();
    }
    (function () {
        let tempSectionLanguage = document.getElementById("sectionLanguage1");

        for (var i = 0; i < languageObject.length; i++) {
            let tempCreateLanguage = document.createElement("article");
            tempCreateLanguage.className = "listOfLanguage";
            tempCreateLanguage.innerHTML = languageObject[i].language;
            tempCreateLanguage.setAttribute("onclick", "chosenLanguage()");
            tempSectionLanguage.appendChild(tempCreateLanguage);

        }
    })();
    chosenLanguage();

}