const resizeGrid = (function () {
    let tempBody = get('body');
    let tempMainSection = get('#main-section');
    let tempRightSection = get('#right-section');
    let tempOpenCloseLanguage = get('#open-close-language');
    let tempCityNameHeaderH2 = get('.h2-city-name-header');
    let tempArticleSection = get('.article-section');
    let resizeGridPrivate = function () {
        let tempMainSectionWidth = tempMainSection.clientWidth;
        let tempMainSectionHeight = tempMainSection.clientHeight;

        let tempFontSize = tempMainSectionWidth * 0.015 + 'px';
        let tempResizeWidth = tempRightSection.clientWidth;
        let tempResizeHeight = tempRightSection.clientHeight;

        tempMainSection.style.fontSize = tempFontSize;
        tempOpenCloseLanguage.style.fontSize = tempFontSize;

        if (tempBody[0].clientWidth > tempBody[0].clientHeight) {
            if (tempMainSectionWidth / tempMainSectionHeight > SCREEN_RESOLUTION) {
                for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempArticleSection.length; tempArticleSectionLength++) {
                    if (tempArticleSectionLength !== 0) {
                        tempArticleSection[tempArticleSectionLength].style.height = `${tempResizeHeight / 3}px`;
                        tempArticleSection[tempArticleSectionLength].style.width = `${tempResizeWidth / 3}px`;
                    }
                    else {
                        tempArticleSection[tempArticleSectionLength].style.height = `${((tempResizeHeight * 2) / 3) + 3}px`;
                        tempArticleSection[tempArticleSectionLength].style.width = `${((tempResizeWidth * 2) / 3) + 3}px`;
                    }
                }
            }
            else {
                for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempArticleSection.length; tempArticleSectionLength++) {
                    if (tempArticleSectionLength !== 0) {
                        tempArticleSection[tempArticleSectionLength].style.height = `${tempResizeHeight / 3}px`;
                        tempArticleSection[tempArticleSectionLength].style.width = `${tempResizeWidth / 3}px`;
                    }
                    else {
                        tempArticleSection[tempArticleSectionLength].style.height = `${((tempResizeHeight * 2) / 3) + 3}px`;
                        tempArticleSection[tempArticleSectionLength].style.width = `${((tempResizeWidth * 2) / 3) + 3}px`;
                    }
                }
            }

        }

        for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempArticleSection.length; tempArticleSectionLength++) {
            let tempSectionHeight = tempArticleSection[tempArticleSectionLength].clientHeight;
            tempCityNameHeaderH2[tempArticleSectionLength].style.height = `${tempSectionHeight * 0.2}px`;
            tempCityNameHeaderH2[tempArticleSectionLength].style.fontSize = `${tempSectionHeight * 0.15}px`;
        }
    };

    on('resizeGrid', function (event, data) {
        resizeGridPrivate();

    });
})();