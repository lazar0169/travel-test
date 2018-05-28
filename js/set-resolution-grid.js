window.addEventListener('resize', resizeGrid);
function resizeGrid() {
    let tempMainSection = document.getElementById('main-section');
    let tempMainSectionA = tempMainSection.clientWidth;
    let tempMainSectionB = tempMainSection.clientHeight;

    let tempLanguage = document.getElementById('language');
    let tempLanguage1 = document.getElementById('open-close-language');

    let tempFontSize = tempMainSectionA * 0.015 + 'px';
    tempMainSection.style.fontSize = tempFontSize;
    tempLanguage1.style.fontSize = tempFontSize;

    let tempSection = document.getElementsByClassName('article-section');
    let tempResize = document.getElementById('right-section');
    let tempResizeA = tempResize.clientWidth;
    let tempResizeB = tempResize.clientHeight;

    if (tempMainSectionA / tempMainSectionB > SCREEN_RESOLUTION) {
        
        

        for (let i = 0; i < tempSection.length; i++) {
            if (i !== 0) {
                tempSection[i].style.height = `${tempResizeB / 3}px`;
                tempSection[i].style.width = `${tempResizeA / 3}px`;
            }
            else {
                tempSection[i].style.height = `${((tempResizeB * 2) / 3) + 3}px`;
                tempSection[i].style.width = `${((tempResizeA * 2) / 3) + 3}px`;
            }
        }
    }

    else {
        for (let i = 0; i < tempSection.length; i++) {
            if (i !== 0) {
                tempSection[i].style.height = `${tempResizeB / 3}px`;
                tempSection[i].style.width = `${tempResizeA / 3}px`;

            }
            else {
                tempSection[i].style.height = `${((tempResizeB * 2) / 3) + 3}px`;
                tempSection[i].style.width = `${((tempResizeA * 2) / 3) + 3}px`;
            }
        }
    }
    let tempCityNameHeaderH2 = document.getElementsByClassName('h2-city-name-header');

    for (let i = 0; i < tempSection.length; i++) {
        let tempSectionA = tempSection[i].clientHeight;
        tempCityNameHeaderH2[i].style.height = `${tempSectionA * 0.2}px`;
        tempCityNameHeaderH2[i].style.fontSize = `${tempSectionA * 0.15}px`;
    }
}