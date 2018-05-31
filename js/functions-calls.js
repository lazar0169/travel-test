window.addEventListener('load', () => {
    makeArrayId.arrayId();
});

window.addEventListener('load', () => {
    createLanguage.choseLanguage();
});

document.getElementById('open-close-language').addEventListener('click', () => {
    showHideLanguage.showHide();
});

window.addEventListener("load", function () {
    resizeResolution.setResolution();
});

window.addEventListener("resize", function () {
    resizeResolution.setResolution();
});

window.addEventListener('resize', () => {
    resizeGrid.setResizeGrid();
});
window.addEventListener('load', () => {
resizeGrid.setResizeGrid();
});