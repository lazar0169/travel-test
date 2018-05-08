function addArticleDescription(){
    var ArtDesc = document.getElementsByClassName("articleGrid");
    
    var addSectDesc = document.createElement("section");
    addSectDesc.id = "sectionDescription";
    let k = 0;
    let tempK;
    let tempJ;
    tempK = destinationObject[k].rating;
        for(let j = 1; j< destinationObject.length; j++){
            tempJ = destinationObject[j].rating;
            if(tempK<tempJ){
                tempK = tempJ;
                k=j;
                addSectDesc.innerHTML = destinationObject[k].desc;
            }
        }
    addSectDesc.innerHTML = destinationObject[k].desc;
    for(let i = 0; i<ArtDesc.length; i++)
    {
        ArtDesc[i].appendChild(addSectDesc);
    }
}