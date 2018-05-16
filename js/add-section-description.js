
function fullSize() {


    let tempclickedCity = document.getElementsByClassName("articleSection");

    for (let i = 0; i < tempclickedCity.length; i++) {

        (function (index) {

            tempclickedCity[i].onclick = function () {
                let tempmainSection = document.getElementById("fullScreenShow");
                let temph2cityNameHeader = document.getElementsByClassName("h2cityNameHeader");
             
                tempmainSection.style.visibility = "visible";

                let tempSectionA = tempmainSection.clientHeight;
                temph2cityNameHeader[i].style.height = tempSectionA * 0.2 + "px";
                

                let tempsectionDescription = document.getElementsByClassName("sectionFooter");
    
                let x = tempsectionDescription[index].innerHTML;
                tempmainSection.innerHTML = x;

                
            }
        })(i);
    }

}