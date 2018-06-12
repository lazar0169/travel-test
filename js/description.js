const description = (function () {
    let tempBody = get('body');
    let tempMainSection = get('#main-section');
    let tempRightSection = get('#right-section');
    let tempOpenCloseLanguage = get('#open-close-language');
    let tempCityNameHeaderH2 = get('.h2-city-name-header');
    let tempArticleSection = get('.article-section');
    let tempCityDescTxt = get('.description-text');

    let arrayIdPrivate = function (tempSeason) {
        let tempIdArray = [];
        let tempNumberOfArray = 0;
        if (tempSeason == 'all') {
            for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
                tempIdArray[tempNumberOfArray] = destinationObject[tempObjectLength].id;
                tempNumberOfArray++;
            }
        }
        else {
            for (let tempObjectLength in destinationObject) {
                let tempSeasonsArray = Object.keys(destinationObject[tempObjectLength].seasons);
                for (let tempSeasonsArrayLength in tempSeasonsArray) {
                    if (String(tempSeason) === String(tempSeasonsArray[tempSeasonsArrayLength])) {
                        tempIdArray[tempNumberOfArray] = destinationObject[tempObjectLength].id;
                        tempNumberOfArray++;
                    }
                }
            }

        }
        trigger('highRate', { data: tempIdArray });
    };


    let highRatePrivate = function (tempArray) {
        let tempRating;
        let highRateID;
        for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
            if (tempArray[0] === destinationObject[tempObjectLength].id) {
                tempRating = destinationObject[tempObjectLength].rating;
                highRateID = destinationObject[tempObjectLength].id;
                break;
            }
        }

        for (let tempNumberOfArray = 1; tempNumberOfArray < tempArray.length; tempNumberOfArray++) {
            for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
                if (tempArray[tempNumberOfArray] === destinationObject[tempObjectLength].id) {
                    let tempRatingX = destinationObject[tempObjectLength].rating;
                    if (tempRating < tempRatingX) {
                        tempRating = tempRatingX;
                        highRateID = destinationObject[tempObjectLength].id;
                        break;
                    }
                }
            }
        }
        trigger('makeSection', { data: tempArray });
        trigger('makeCity', { data: tempArray, highRateID: highRateID });
    };

    let addSectionPrivate = function (temp) {

        for (let sectionNumber in temp) {
            let newSection = document.createElement('section');
            newSection.id = `section-${Number(sectionNumber)}`;

            if (Number(sectionNumber) !== 0) {
                newSection.className = 'article-section';
            }
            else {
                newSection.className = 'article-section article-section-first';
            }
            tempRightSection.appendChild(newSection);

            let tempCityName = document.createElement('section');
            tempCityName.className = 'section-footer';

            let tempCityNameHeader = document.createElement('h2');
            tempCityNameHeader.className = 'h2-city-name-header';

            let tempCityDescTxt = document.createElement('p');
            tempCityDescTxt.className = 'description-text';

            let tempReadMore = document.createElement('button');
            tempReadMore.className = 'read-more';
            tempReadMore.innerText = 'Read more';

            tempCityName.appendChild(tempCityNameHeader);
            tempCityName.appendChild(tempCityDescTxt);
            tempCityName.appendChild(tempReadMore);


            tempArticleSection[sectionNumber].appendChild(tempCityName);
        }
        addListener('.article-section', 'click', 'fullSizeIndex');
    };


    let addCityPrivate = function (temp, tempID) {
        let tempSectionNumber = 1;

        for (let tempIdArray in temp) {
            for (let tempObjectLength in destinationObject) {
                if (temp[tempIdArray] === destinationObject[tempObjectLength].id) {
                    if (tempID != destinationObject[tempObjectLength].id) {
                        tempArticleSection[tempSectionNumber].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                        tempCityNameHeaderH2[tempSectionNumber].innerText = destinationObject[tempObjectLength].name;
                        tempCityDescTxt[tempSectionNumber].innerText = destinationObject[tempObjectLength].desc;
                        tempArticleSection[tempSectionNumber].dataset.id = destinationObject[tempObjectLength].id;
                        tempSectionNumber++;
                        break;
                    }
                    else {
                        tempArticleSection[0].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                        tempCityNameHeaderH2[0].innerText = destinationObject[tempObjectLength].name;
                        tempCityDescTxt[0].innerText = destinationObject[tempObjectLength].desc;
                        tempArticleSection[0].dataset.id = destinationObject[tempObjectLength].id;
                        break;
                    }
                }
            }
        }
    };

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
            trigger('resize/desktopView', {});
        }
        else{
            trigger('resize/mobileView', {});
        }
        



    };

    let index = function (temp) {
        window.open(`full-size.html?id=${temp}`, '_self');
    };



    let setH2 = function () {
        for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempArticleSection.length; tempArticleSectionLength++) {
            let tempSectionHeight = tempArticleSection[tempArticleSectionLength].clientHeight;
            tempCityNameHeaderH2[tempArticleSectionLength].style.height = `${tempSectionHeight * 0.2}px`;
            tempCityNameHeaderH2[tempArticleSectionLength].style.fontSize = `${tempSectionHeight * 0.15}px`;
        }

    };

    on('setH2', function () {
        setH2();
    });

    on('fullSizeIndex', function (event, tempData) {
        index(tempData.data);
    });

    on('resizeGrid', function (event, data) {
        resizeGridPrivate();
        

    });

    on('makeCity', function (event, tempData) {
        let highRateID = tempData.highRateID;
        addCityPrivate(tempData.data, highRateID);
    });





    on('makeSection', function (event, tempData) {
        addSectionPrivate(tempData.data);
    })



    on('highRate', function (event, tempData) {
        highRatePrivate(tempData.data);
        trigger('resizeGrid', {});

    });




    on('makeArrayId', function (event, tempData) {
        arrayIdPrivate(tempData.season);
    });
})();