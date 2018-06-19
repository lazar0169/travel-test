const makeSection = (function () {
    let tempRightSection = get('#right-section');
    let tempArticleSection = get('.article-section');
    let tempCityDescTxt = get('.description-text');
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

    on('makeSection', function (event, tempData) {
        addSectionPrivate(tempData.data);
    })
})();

const makeCity = (function () {
    let tempCityNameHeaderH2 = get('.h2-city-name-header');
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

    on('makeCity', function (event, tempData) {
        let highRateID = tempData.highRateID;
        addCityPrivate(tempData.data, highRateID);
    })
})();

