window.addEventListener("resize", setResolution);

var articleNumber = 0;

    function setResolution(){
    var tempmainS = document.getElementById("mainS");
    var tempmainSection = document.getElementById("mainSection");
    var a = mainS.clientWidth;
    var b = mainS.clientHeight;
    var c = a/b;
    const d = 16/9;
    var g = d-c;
    if(c > d){
        let a1;
        a1 = b*(16/9) + "px";
        tempmainS.style.display = "flex";
        tempmainS.style.justifyContent = "center";
        tempmainSection.style.width = a1;
        tempmainSection.style.height = "100%";
        var tempRow = document.getElementsByClassName("articleGrid");
        for(var i=0; i<tempRow.length; i++ )
        {
            if(i!=0)
            {
    
                tempRow[i].style.height = b/3;
            }
            else{
                tempRow[0].style.height = b*2/3;
            }
        } 
        }
    else{
        if(c < d){
            let b1;
            b1 = a/(16/9) + "px";
            tempmainS.style.display = "flex";
            tempmainS.style.alignItems = "center"; 
            tempmainSection.style.height = b1;
            tempmainSection.style.width = "100%";  

            var tempRow = document.getElementsByClassName("articleGrid");
        for(var i=0; i<tempRow.length; i++ )
        {
            if(i!=0)
            {
    
                tempRow[i].style.height = a/3;
            }
            else{
                tempRow[0].style.height = a*2/3;
            }
        } 
        }
        else{
            console.log("trece if ostalo isto ako je rezultat 0: " + g);
        }
    }
    
}

function addArticle(){
    articleNumber++;
    var tempmainSection = document.getElementById("mainSection");
    var a = mainSection.clientWidth;
    var b = mainSection.clientHeight;
    var a1 = a/3;
    var b2 = b/3;

    var temprightSection = document.getElementById("rightSection");
    var newArticle = document.createElement("article");
    newArticle.id = "article" + articleNumber;
    newArticle.className = "articleGrid";
    
    temprightSection.style.display = "grid";
    temprightSection.style.gridTemplateColumns = "auto auto auto";

    temprightSection.style.gridGap = "0.5%";
    temprightSection.style.padding = "0.5%";
    newArticle.style.backgroundColor = "skyblue";

    temprightSection.appendChild(newArticle);

    var firstArticle = document.getElementById("article1");
    firstArticle.style.gridColumnStart = 1;
    firstArticle.style.gridColumnEnd = 3;
    firstArticle.style.gridRowStart = 1;
    firstArticle.style.gridRowEnd = 3;

    var bgImageCity = document.getElementById("article" + articleNumber);
    bgImageCity.style.backgroundImage = "url('C:/Users/User02/Desktop/travel-test/images/london.jpg')";
    bgImageCity.style.backgroundSize = "100% 100%";

    /*
    var bgImg = document.getElementById("article" + articleNumber);
    bgImg.style.backgroundImage = "url('london.jpg')";
    bgImg.style.backgroundSize = "100% 100%";
    bgImg.style.width = "100%";
    bgImg.style.height = "100%";
*/


    /*
    var tempimageCity = document.createElement("img");
    tempimageCity.id = "image" + articleNumber;
    tempimageCity.style.height = "100%";
    tempimageCity.style.width = "100%";
    tempimageCity.src = "london.jpg";
    tempimageCity.alt = "london";
    imageCity.appendChild(tempimageCity);
*/

    var tempcityName = document.createElement("footer");

    var tekst = document.createTextNode("neki tekst");
    tempcityName.appendChild(tekst);
    tempcityName.style.color = "white";

    bgImageCity.appendChild(tempcityName);
    
    var tempRow = document.getElementsByClassName("articleGrid");
    for(var i=0; i<tempRow.length; i++ )
    {
        if(i!=0)
        {

            tempRow[i].style.height = "600px";
        }
        else{
            tempRow[0].style.height = "600px";
        }
    } 
    
}


