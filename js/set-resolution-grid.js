

const resizeGrid = (function () {

    let resizeGridPrivate = function () {
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
            for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempSection.length; tempArticleSectionLength++) {
                if (tempArticleSectionLength !== 0) {
                    tempSection[tempArticleSectionLength].style.height = `${tempResizeB / 3}px`;
                    tempSection[tempArticleSectionLength].style.width = `${tempResizeA / 3}px`;
                }
                else {
                    tempSection[tempArticleSectionLength].style.height = `${((tempResizeB * 2) / 3) + 3}px`;
                    tempSection[tempArticleSectionLength].style.width = `${((tempResizeA * 2) / 3) + 3}px`;
                }
            }
        }

        else {
            for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempSection.length; tempArticleSectionLength++) {
                if (tempArticleSectionLength !== 0) {
                    tempSection[tempArticleSectionLength].style.height = `${tempResizeB / 3}px`;
                    tempSection[tempArticleSectionLength].style.width = `${tempResizeA / 3}px`;
                }
                else {
                    tempSection[tempArticleSectionLength].style.height = `${((tempResizeB * 2) / 3) + 3}px`;
                    tempSection[tempArticleSectionLength].style.width = `${((tempResizeA * 2) / 3) + 3}px`;
                }
            }
        }
        let tempCityNameHeaderH2 = document.getElementsByClassName('h2-city-name-header');

        for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempSection.length; tempArticleSectionLength++) {
            let tempSectionA = tempSection[tempArticleSectionLength].clientHeight;
            tempCityNameHeaderH2[tempArticleSectionLength].style.height = `${tempSectionA * 0.2}px`;
            tempCityNameHeaderH2[tempArticleSectionLength].style.fontSize = `${tempSectionA * 0.15}px`;
        }


    };

    let resizeGridPublic = function () {
        resizeGridPrivate();

    };
    return {
        setResizeGrid: resizeGridPublic
    };

})();