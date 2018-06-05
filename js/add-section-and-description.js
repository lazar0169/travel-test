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

            let bgImageCity = get('.', 'article-section');

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

            bgImageCity[sectionNumber].appendChild(tempCityName);
        }


        addListenerData('.', 'article-section', 'click', fullSizeIndex.index);


        // for (let sectionNumberId of get('article-section')) {
        //     sectionNumberId.addEventListener('click', () => {
        //         fullSizeIndex.index(sectionNumberId.dataset.id);
        //     });
        // }
    };


    return {
        addSection: addSectionPrivate
    };
})();

const makeCity = (function () {
    let addCityPrivate = function (temp) {
        let tempData = get('.', 'article-section');
        let tempCityNameHeader = get('.', 'h2-city-name-header');
        let tempCityNamePar = get('.', 'description-text');
        let tempSectionNumber = 1;

        for (let tempIdArray in temp) {
            for (let tempObjectLength in destinationObject) {
                if (temp[tempIdArray] === destinationObject[tempObjectLength].id) {
                    if (highRate.highId != destinationObject[tempObjectLength].id) {
                        tempData[tempSectionNumber].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                        tempCityNameHeader[tempSectionNumber].innerText = destinationObject[tempObjectLength].name;
                        tempCityNamePar[tempSectionNumber].innerText = destinationObject[tempObjectLength].desc;
                        tempData[tempSectionNumber].dataset.id = destinationObject[tempObjectLength].id;
                        tempSectionNumber++;
                    }
                    else {
                        tempData[0].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                        tempCityNameHeader[0].innerText = destinationObject[tempObjectLength].name;
                        tempCityNamePar[0].innerText = destinationObject[tempObjectLength].desc;
                        tempData[0].dataset.id = destinationObject[tempObjectLength].id;
                    }
                }
            }
        }
    };

    return {
        addCity: addCityPrivate
    };
})();

