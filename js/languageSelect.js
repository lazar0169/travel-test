let languageObject = [
    {
       language: 'Srpski'
    }, 
    {
        language: 'Engleski'
    },
    {
        language: 'Hrvatski'
    }, 
    {
        language: 'Francuski'
    }, 
    {
        language: 'Ruski'
    }, 
    {
        language: 'Crnogorski'
    },
    {
        language: 'Bugarski'
    }, 
    {
        language: 'Rumunski'
    }, 
    {
        language: 'Finski'
    }, 
    {
        language: 'Arapski'
    },
    {
        language: 'Kineski'
    }      
]
let tempShowHide = false;
function showHideLanguage(){

    var tempShowHideLanguage = document.getElementById("sectionLanguage1")
    if(tempShowHide == false){
        tempShowHide = true;
        tempShowHideLanguage.style.display = "flex";
    }
    else{
        tempShowHide = false;
        tempShowHideLanguage.style.display = "none";
    }
}
function chosenLanguage(){
    let tempchosenLanguage = document.getElementById("selectLanguage");
    let tempchoseLanguage = document.getElementsByClassName("listOfLanguage");
   
    for (var i = 0; i < tempchoseLanguage.length; i++)
    {

    (function(index){
        tempchoseLanguage[i].onclick = function(){
             
            var x = tempchoseLanguage[index].textContent;
            tempchosenLanguage.innerText = x;
            showHideLanguage();
        }    
    })(i);
}

}
