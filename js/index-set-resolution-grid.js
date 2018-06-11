const resizeGrid = (function () {
    
    
    let tempCityNameHeaderH2 = get('.', 'h2-city-name-header');
    let resizeGridPrivate = function () {

        let tempBody = get('tag', 'body');
        let tempMainSection = get('#', 'main-section');
        let tempMainSectionA = tempMainSection.clientWidth;
        let tempMainSectionB = tempMainSection.clientHeight;
        let tempLanguage = get('#', 'language');
        let tempLanguage1 = get('#', 'open-close-language');
        let tempFontSize = tempMainSectionA * 0.015 + 'px';
        let tempSection = get('.', 'article-section');
        let tempResize = get('#', 'right-section');
        let tempResizeA = tempResize.clientWidth;
        let tempResizeB = tempResize.clientHeight;

        tempMainSection.style.fontSize = tempFontSize;
        tempLanguage1.style.fontSize = tempFontSize;

        if(tempBody[0].clientWidth > tempBody[0].clientHeight){
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

        }

        
        for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempSection.length; tempArticleSectionLength++) {
            let tempSectionHeight = tempSection[tempArticleSectionLength].clientHeight;
            tempCityNameHeaderH2[tempArticleSectionLength].style.height = `${tempSectionHeight * 0.2}px`;
            tempCityNameHeaderH2[tempArticleSectionLength].style.fontSize = `${tempSectionHeight * 0.15}px`;
        }
    };
    
    on('resizeGrid', function (event, data) {
        resizeGridPrivate();
        
    });
})();