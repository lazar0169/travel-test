const description = (function () {
    let tempBody = get('body');
    let tempMainSection = get('#main-section');
    let tempRightSection = get('#right-section');
    let tempOpenCloseLanguage = get('#open-close-language');
    let tempCityNameHeaderH2 = get('.h2-city-name-header');
    let tempArticleSection = get('.article-section');
    let tempCityDescTxt = get('.description-text');
    let tempLink = get('#season-section');
    let tempLanguage = get('#language');

    let arrayId = function (tempSeason) {
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
        highRate(tempIdArray);
    };

    let highRate = function (tempArray) {
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
        addSection(tempArray);
        addCity(tempArray, highRateID);
    };

    let addSection = function (temp) {

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

            tempArticleSection[sectionNumber].addEventListener('click', () => {
                index(tempArticleSection[sectionNumber].dataset.id);
            })
        }
    };

    let addCity = function (temp, tempID) {
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

    let index = function (temp) {
        window.open(`full-size.html?id=${temp}`, '_self');
    };

    let setFont = function () {

        for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempArticleSection.length; tempArticleSectionLength++) {
            let tempSectionHeight = tempArticleSection[tempArticleSectionLength].clientHeight;
            tempCityNameHeaderH2[tempArticleSectionLength].style.height = `${tempSectionHeight * 0.2}px`;
            tempCityNameHeaderH2[tempArticleSectionLength].style.fontSize = `${tempSectionHeight * 0.15}px`;
            tempCityDescTxt[tempArticleSectionLength].style.fontSize = `${tempSectionHeight * 0.07}px`;
        }

        let tempLinkWidth = tempLink.clientWidth;
        tempLink.style.fontSize = `${tempLinkWidth * 0.12}px`;

        let tempLanguageWidth = tempOpenCloseLanguage.clientWidth;
        tempOpenCloseLanguage.style.fontSize = `${tempLanguageWidth * 0.12}px`;
        tempLanguage.style.fontSize = `${tempLanguageWidth * 0.12}px`;
    };

    let rows = function (tempRows, tempCol) {
        let rowsNumber = parseInt(tempArticleSection.length / tempRows);
        let rowsHeight = tempRightSection.clientHeight / tempRows;
        let columnWidth = tempRightSection.clientWidth / tempCol;
        if (tempArticleSection.length % tempRows != 0) {
            rowsNumber = rowsNumber + 2;
        }
        else {
            rowsNumber++;
        }
        tempRightSection.style.gridTemplateColumns = `repeat(${tempCol}, ${columnWidth}px)`;
        tempRightSection.style.gridTemplateRows = `repeat(${rowsNumber}, ${rowsHeight}px)`;
        for (let elemNumber in tempArticleSection) {
            if (elemNumber == 0) {
                tempArticleSection[elemNumber].id = 'section-0F';
                break;
            }
        }

    }

    let columns = function () {
        if (tempRightSection.clientWidth < tempRightSection.clientHeight) {
            let rowsNumber = tempArticleSection.length;
            tempRightSection.style.gridTemplateColumns = `${tempRightSection.clientWidth}px`;
            for (let elemNumber in tempArticleSection) {
                if (elemNumber == 0) {
                    tempArticleSection[elemNumber].id = 'section-0M';
                    break;
                }
            }
            tempRightSection.style.gridTemplateRows = `repeat(${rowsNumber }, 50%)`;
        }

    }

    on('setFont', function () {
        setFont();
    });

    on('setRows', function (event, tempData) {
        rows(tempData.row, tempData.column);
    });

    on('setColumns', function (event, tempData) {
        columns();
    });

    on('makeArrayId', function (event, tempData) {
        arrayId(tempData.season);
    });
})();