const description = (function () {
    let tempRightSection = get('#right-section');
    let tempArticleSection = get('.article-section');
    let tempCityNameHeaderH2 = get('.h2-city-name');
    let tempCityDescTxt = get('.description-text');
    let tempReadMore = get('.read-more');

    function arrayId(tempSeason) {
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

    function highRate(tempArray) {
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
                    else {
                        break;
                    }
                }
            }
        }
        addSection(tempArray);
        addCity(tempArray, highRateID);
    };

    function addSection(temp) {


        for (let sectionNumber in temp) {
            let newSection = document.createElement('section');
            newSection.id = `section-${Number(sectionNumber)}`;
            newSection.classList.add('article-section');

            tempRightSection.appendChild(newSection);

            let tempCityName = document.createElement('section');
            tempCityName.classList.add('section-footer');

            tempCityName.innerHTML = `<h2 class="h2-city-name"></h2>
            <p id= ovo-je${sectionNumber} class="description-text"></p>
            <button class= "read-more">Read more</button>`;

            // let tempCityNameHeader = document.createElement('h2');
            // tempCityNameHeader.classList.add('h2-city-name');

            // let tempCityDescTxt = document.createElement('p');
            // tempCityDescTxt.classList.add('description-text');

            // let tempReadMore = document.createElement('button');
            // tempReadMore.classList.add('read-more');
            // tempReadMore.innerText = 'Read more';

            // tempCityName.appendChild(tempCityNameHeader);
            // tempCityName.appendChild(tempCityDescTxt);
            // tempCityName.appendChild(tempReadMore);

            tempArticleSection[sectionNumber].appendChild(tempCityName);

            tempArticleSection[sectionNumber].addEventListener('click', () => {
                index(tempArticleSection[sectionNumber].dataset.id);
            })
        }
    };

    function addCity(temp, tempID) {

        let tempSectionNumber = 1;
        for (let tempIdArray in temp) {
            for (let tempObjectLength in destinationObject) {
                if (temp[tempIdArray] === destinationObject[tempObjectLength].id) {
                    if (tempID != destinationObject[tempObjectLength].id) {
                        tempArticleSection[tempSectionNumber].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                        tempCityNameHeaderH2[tempSectionNumber].innerHTML = destinationObject[tempObjectLength].name;
                        tempCityDescTxt[tempSectionNumber].innerHTML = destinationObject[tempObjectLength].desc;
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

    function index(temp) {
        window.open(`modal.html?id=${temp}`, '_self');
    };

    function setFont(tempWidth, tempHeight) {
        for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempArticleSection.length; tempArticleSectionLength++) {
            let tempSectionHeight = tempArticleSection[tempArticleSectionLength].clientHeight;
            let tempSectionWidth = tempArticleSection[tempArticleSectionLength].clientWidth;
            tempCityNameHeaderH2[tempArticleSectionLength].style.height = `${tempSectionHeight * 0.2}px`;
            tempCityNameHeaderH2[tempArticleSectionLength].style.fontSize = `${tempSectionWidth * 0.10}px`;
            tempCityDescTxt[tempArticleSectionLength].style.fontSize = `${tempSectionWidth * 0.05}px`;
            tempReadMore[tempArticleSectionLength].style.fontSize = `${tempSectionWidth * 0.11}px`;
        }
    };

    function rows(tempRows, tempCol) {
        let rowsNumber = parseInt(tempArticleSection.length / tempRows);
        let rowsHeight = tempRightSection.clientHeight / tempRows;
        let columnWidth = tempRightSection.clientWidth / tempCol;
        if (tempArticleSection.length % tempRows != 0) {
            rowsNumber = rowsNumber + 2;
        } else {
            rowsNumber++;
        }
        tempRightSection.style.gridTemplateColumns = `repeat(${tempCol}, ${columnWidth}px)`;
        tempRightSection.style.gridTemplateRows = `repeat(${rowsNumber}, ${rowsHeight}px)`;
        for (let elemNumber in tempArticleSection) {
            if (elemNumber == 0) {
                tempArticleSection[elemNumber].id = 'section-0';
                break;
            }
        }
    };

    function columns(tempCol) {
        if (tempRightSection.clientWidth < tempRightSection.clientHeight) {
            let rowsNumber = parseInt(tempArticleSection.length / tempCol);
            tempRightSection.style.gridTemplateColumns = `none`;
            tempRightSection.style.gridTemplateColumns = `repeat(${tempCol}, $100% )`;

            if (tempArticleSection.length % tempCol != 0) {
                rowsNumber++;
            }

            tempRightSection.style.gridTemplateRows = `repeat(${rowsNumber}, 50%)`;
        }
    };
    on('makeArrayId', function (event, data) {
        arrayId(data.season);
    });

    on('setFont', function (event, data) {
        setFont(data.width, data.height);
    });

    on('setRows', function (event, data) {
        rows(data.row, data.column);
    });

    on('setColumns', function (event, data) {
        columns(data.column);
    });

   
})();