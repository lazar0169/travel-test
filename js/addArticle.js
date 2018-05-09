function addArticle(numbArt){

    for(let articleNumber = 0; articleNumber < numbArt; articleNumber++){
        let temprightSection = document.getElementById("rightSection");
        let newArticle = document.createElement("article");
        
        if(articleNumber != 0){
            newArticle.className = "articleGrid";
        }
        else{
            newArticle.className = "articleGrid articleGridFirst";
        }
        newArticle.id = "article" + articleNumber;
        
  
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
        tempcityName.id= "articleFooter" + articleNumber;
        tempcityName.innerHTML = destinationObject[articleNumber].name;
        bgImageCity.appendChild(tempcityName);

        addArticleDescription();
}
}