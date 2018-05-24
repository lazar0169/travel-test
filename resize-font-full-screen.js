window.addEventListener("load", resizeFontFullScreen);
window.addEventListener("resize", resizeFontFullScreen);
function resizeFontFullScreen() {

    let tempH1 = document.getElementById("h1FullScreenShow");
    let tempP = document.getElementById("pFullScreen");
    let temph1tablePrice = document.getElementsByClassName("h1tablePrice");
    let tempTable = document.getElementsByTagName("table");
    let tempFont = tempH1.clientWidth;
    tempH1.style.fontSize = tempFont * 0.15 + "px";
    tempP.style.fontSize = tempFont * 0.03 + "px";
    for (let i = 0; i < temph1tablePrice.length; i++) {
        temph1tablePrice[i].style.fontSize =  tempFont * 0.05 +"px";
        tempTable[i].style.fontSize = tempFont * 0.03 +"px";
    }
}