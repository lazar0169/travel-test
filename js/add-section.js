function addSection(temp) {
    let tempRightSection = document.getElementById('right-section');

    for (let sectionNumber = 0; sectionNumber < temp.length; sectionNumber++) {
        let newSection = document.createElement('section');
        newSection.id = `section-${sectionNumber}`;

        if (sectionNumber !== 0) {
            newSection.className = 'article-section';
        }
        else {
            newSection.className = 'article-section article-section-first';
        }
        newSection.addEventListener('click', fullSize);
        tempRightSection.appendChild(newSection);

        let bgImageCity = document.getElementsByClassName('article-section');

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
}