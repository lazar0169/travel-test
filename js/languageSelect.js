var languageObject = [
    {
       language: 'Srpski'
    }, 
    {
        language: 'Engleski'
    } 
]

function selectLanguage(){
    let tempSectionLanguage = document.getElementById("sectionLanguage");
    let tempCreateLanguage = document.createElement("article");
    tempCreateLanguage.className = "listOfLanguage";

    for (let i = 0; i<languageObject.length; i++){
        tempCreateLanguage.innerHTML = languageObject[i].language;
    }
    tempSectionLanguage.appendChild(tempCreateLanguage);


}