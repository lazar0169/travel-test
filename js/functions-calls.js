window.addEventListener('load', () => {
    makeArrayId.arrayId();
    let i = 1;
    // trigger('proba', { est_podatak: i });
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

on('proba', function (event, data) {
    console.log(data.test_podatak);
});