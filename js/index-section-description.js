const makeSection = (function () {
    let addSectionPrivate = function (temp) {
        let tempRightSection = get('#', 'right-section');

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

            let tempCityNamePar = document.createElement('p');
            tempCityNamePar.className = 'description-text';

            let tempReadMore = document.createElement('button');
            tempReadMore.className = 'read-more';
            tempReadMore.innerText = 'Read more';

            tempCityName.appendChild(tempCityNameHeader);
            tempCityName.appendChild(tempCityNamePar);
            tempCityName.appendChild(tempReadMore);

            let tempArticleSection = get('.', 'article-section');
            tempArticleSection[sectionNumber].appendChild(tempCityName);
        }
        addListener('.', 'article-section', 'click', 'fullSizeIndex');
    };
    
    on('makeSection', function (event, tempData) {
        addSectionPrivate(tempData.data);
    })
})();

const makeCity = (function () {
    let addCityPrivate = function (temp, tempID) {
            let tempSection = get('.', 'article-section');
            let tempCityNameHeader = get('.', 'h2-city-name-header');
            let tempCityNamePar = get('.', 'description-text');
            let tempSectionNumber = 1;

            for (let tempIdArray in temp) {
                for (let tempObjectLength in destinationObject) {
                    if (temp[tempIdArray] === destinationObject[tempObjectLength].id) {
                        if (tempID != destinationObject[tempObjectLength].id) {
                            tempSection[tempSectionNumber].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                            tempCityNameHeader[tempSectionNumber].innerText = destinationObject[tempObjectLength].name;
                            tempCityNamePar[tempSectionNumber].innerText = destinationObject[tempObjectLength].desc;
                            tempSection[tempSectionNumber].dataset.id = destinationObject[tempObjectLength].id;
                            tempSectionNumber++;
                        }

                        else {
                            tempSection[0].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                            tempCityNameHeader[0].innerText = destinationObject[tempObjectLength].name;
                            tempCityNamePar[0].innerText = destinationObject[tempObjectLength].desc;
                            tempSection[0].dataset.id = destinationObject[tempObjectLength].id;
                        }
                    }
                }
            }
    };

    on('makeCity', function (event, tempData) {
        let highRateID= tempData.highRateID;
        addCityPrivate(tempData.data, highRateID);
    })
})();

