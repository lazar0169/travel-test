function addArticle(numbArt){

    for(var articleNumber = 0; articleNumber < numbArt; articleNumber++)
{
    var temprightSection = document.getElementById("rightSection");
    var newArticle = document.createElement("article");

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

    var firstArticle = document.getElementById("article0");
    firstArticle.style.gridColumnStart = 1;
    firstArticle.style.gridColumnEnd = 3;
    firstArticle.style.gridRowStart = 1;
    firstArticle.style.gridRowEnd = 3;

    var bgImageCity = document.getElementById("article" + articleNumber);
    bgImageCity.style.backgroundImage = "url('C:/Users/User02/Desktop/travel-test/images/london.jpg')";

    var tempcityName = document.createElement("footer");
    var tekst = document.createTextNode("city name");
    tempcityName.className = "articleFooter"
    tempcityName.id= "articleFooter" + articleNumber;

    tempcityName.appendChild(tekst);


    bgImageCity.appendChild(tempcityName);
    
}

}