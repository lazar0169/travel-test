window.addEventListener('load', resizeFontFullScreen);
window.addEventListener('resize', resizeFontFullScreen);
function resizeFontFullScreen() {

    let tempH1 = document.getElementById('h1-full-screen-show');
    let tempP = document.getElementById('p-full-screen');
    let tempH1tablePrice = document.getElementsByClassName('h1-table-price');
    let tempTable = document.getElementsByTagName('table');
    let tempFont = tempH1.clientWidth;
    tempH1.style.fontSize =` ${tempFont * 0.15}px`;
    tempP.style.fontSize = `${tempFont * 0.03}px`;
    for (let tempTableLenght = 0; tempTableLenght < tempH1tablePrice.length; tempTableLenght++) {
        tempH1tablePrice[tempTableLenght].style.fontSize =  `${tempFont * 0.05}px`;
        tempTable[tempTableLenght].style.fontSize = `${tempFont * 0.03}px`;
    }
}