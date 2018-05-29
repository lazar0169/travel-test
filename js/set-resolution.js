const SCREEN_RESOLUTION = 16 / 9;
window.addEventListener('resize', setResolution);
function setResolution() {
    let tempBody = document.getElementsByTagName('body');
    let tempMainSection = document.getElementById('main-section');
    let tempClientWidth = tempBody[0].clientWidth;
    let tempClientHeight = tempBody[0].clientHeight;
    let tempResolution = tempClientWidth / tempClientHeight;


    // if a<960 
    if (tempResolution >= SCREEN_RESOLUTION) {
        let tempNewClientWidth;
        tempNewClientWidth = `${tempClientHeight * SCREEN_RESOLUTION}px`;
        tempMainSection.style.width = tempNewClientWidth;
        tempMainSection.style.height = '100%';

    }
    else {
        let tempNewClientHeight;
        tempNewClientHeight = `${tempClientWidth / SCREEN_RESOLUTION}px`;
        tempMainSection.style.height = tempNewClientHeight;
        tempMainSection.style.width = '100%';
    }
}


