window.addEventListener("resize", setResolution);

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
        resizeGrid();
    }
    else{
        let b1;
        b1 = a/(16/9) + "px";
        tempmainS.style.display = "flex";
        tempmainS.style.alignItems = "center"; 
        tempmainSection.style.height = b1;
        tempmainSection.style.width = "100%";
        resizeGrid();
    }        

    function resizeGrid(){
        var tempmainSection = document.getElementById("mainSection");
        var tempmainSectionA = mainSection.clientWidth;
        var tempmainSectionB = mainSection.clientHeight;
        if(tempmainSectionA/tempmainSectionB > 16/9){   
            var tempResize = document.getElementById("rightSection");
            var tempResizeA = rightSection.clientWidth;
            var tempResizeB = rightSection.clientHeight;
            var tempArticle = document.getElementsByClassName("articleGrid");
            for (var i = 0; i < tempArticle.length; i++ ) {
                if(i!=0){
                    tempArticle[i].style.height = tempResizeB/3 + "px";          
                }
                else{
                    tempArticle[i].style.height = tempResizeB*2/3 + "px"
                }
            }
        }
        else{
            var tempResize = document.getElementById("rightSection");
            var tempResizeA = rightSection.clientWidth;
            var tempResizeB = rightSection.clientHeight;
            var tempArticle = document.getElementsByClassName("articleGrid");
            for (var i = 0; i < tempArticle.length; i++ ) {
                if(i!=0){
                    tempArticle[i].style.height = tempResizeB/3 + "px";          
                }
                else{
                    tempArticle[i].style.height = tempResizeB*2/3 + "px";
                }
            }
        }
    }
}
/* trebas da resis oko iskacuceg prozora kada se predje misem onmouseover i onmouseout,
treba da kada se klikne da se poveca prozor sa detaljnim opisom,
treba se napraviti niz sa objektima za svaki grad, ...
*/
