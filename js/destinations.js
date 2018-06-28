const description = (function () {
    let destinationWrapper = get('#right-section');
    let destination = get('.article-section');
    let destinationName = get('.model-name');
    let destinationText = get('.description-text');
    let destinationDescription = get('.read-more');

    function arrayId(destinationSeason) {
        let idArray = [];
        let numberOfArray = 0;
        if (destinationSeason === 'all') {
            for (let object = 0; object < destinationObject.length; object++) {
                idArray[numberOfArray] = destinationObject[object].id;
                numberOfArray++;
            }
        }
        else {
            for (let object in destinationObject) {
                let seasonsArray = Object.keys(destinationObject[object].seasons);
                for (let season in seasonsArray) {
                    if (String(destinationSeason) === String(seasonsArray[season])) {
                        idArray[numberOfArray] = destinationObject[object].id;
                        numberOfArray++;
                    }
                }
            }
        }
        highRate(idArray);
    };


    function highRate(array) {
        let rating;
        let highRateID;
        for (let objectNumber = 0; objectNumber < destinationObject.length; objectNumber++) {
            if (array[0] === destinationObject[objectNumber].id) {
                rating = destinationObject[objectNumber].rating;
                highRateID = destinationObject[objectNumber].id;
                break;
            }
        }

        for (let numberOfArray = 1; numberOfArray < array.length; numberOfArray++) {
            for (let objectNumber = 0; objectNumber < destinationObject.length; objectNumber++) {
                if (array[numberOfArray] === destinationObject[objectNumber].id) {
                    let ratingX = destinationObject[objectNumber].rating;
                    if (rating < ratingX) {
                        rating = ratingX;
                        highRateID = destinationObject[objectNumber].id;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        addSection(array);
        addCity(array, highRateID);
    };

    function addSection(array) {


        for (let sectionNumber in array) {
            let newSection = document.createElement('section');
            newSection.id = `section-${Number(sectionNumber)}`;
            newSection.classList.add('article-section');

            destinationWrapper.appendChild(newSection);

            let cityName = document.createElement('section');
            cityName.classList.add('section-footer');

            cityName.innerHTML = `<h2 class="model-name"></h2>
            <p class="description-text"></p>
            <button class= "read-more">Read more</button>`;

            destination[sectionNumber].appendChild(cityName);

            destination[sectionNumber].addEventListener('click', () => {
                index(destination[sectionNumber].dataset.id);
            })
        }
    };

    function addCity(array, highRateID) {

        let sectionNumber = 1;
        for (let id in array) {
            for (let object in destinationObject) {
                if (array[id] === destinationObject[object].id) {
                    if (highRateID !== destinationObject[object].id) {
                        destination[sectionNumber].style.backgroundImage = `url(${destinationObject[object].image})`;
                        destinationName[sectionNumber].innerHTML = destinationObject[object].name;
                        destinationText[sectionNumber].innerHTML = destinationObject[object].desc;
                        destination[sectionNumber].dataset.id = destinationObject[object].id;
                        sectionNumber++;
                        break;
                    }
                    else {
                        destination[0].style.backgroundImage = `url(${destinationObject[object].image})`;
                        destinationName[0].innerText = destinationObject[object].name;
                        destinationText[0].innerText = destinationObject[object].desc;
                        destination[0].dataset.id = destinationObject[object].id;
                        break;
                    }
                }
            }
        }
    };

    function index(clickedId) {
        window.open(`modal.html?id=${clickedId}`, '_self');
    };

    function setFont(width, height) {
        for (let articleNumber = 0; articleNumber < destination.length; articleNumber++) {
            if (width > height) {
                if (articleNumber === 0) {
                    destinationName[articleNumber].style.height = `${height * 0.135}px`;
                    destinationName[articleNumber].style.fontSize = `${width * 0.06}px`;
                    destinationText[articleNumber].style.fontSize = `${width * 0.03}px`;
                    destinationDescription[articleNumber].style.fontSize = `${width * 0.055}px`;
                }
                else {
                    destinationName[articleNumber].style.height = `${height * 0.0675}px`;
                    destinationName[articleNumber].style.fontSize = `${width * 0.03}px`;
                    destinationText[articleNumber].style.fontSize = `${width * 0.015}px`;
                    destinationDescription[articleNumber].style.fontSize = `${width * 0.025}px`;
                }
            }
            else {
                destinationName[articleNumber].style.height = `${height * 0.1}px`;
                destinationName[articleNumber].style.fontSize = `${width * 0.14}px`;
                destinationText[articleNumber].style.fontSize = `${width * 0.07}px`;
                destinationDescription[articleNumber].style.fontSize = `${width * 0.135}px`;
            }
        }
    };

    function rows(row, col) {
        let rowsNumber = parseInt(destination.length / row);
        let rowsHeight = destinationWrapper.clientHeight / row;
        let columnWidth = destinationWrapper.clientWidth / col;
        if (destination.length % row !== 0) {
            rowsNumber = rowsNumber + 2;
        } else {
            rowsNumber++;
        }
        destinationWrapper.style.gridTemplateColumns = `none`;
        destinationWrapper.style.gridTemplateRows = `none`;
        destinationWrapper.style.gridTemplateColumns = `repeat(${col}, ${columnWidth}px)`;
        destinationWrapper.style.gridTemplateRows = `repeat(${rowsNumber}, ${rowsHeight}px)`;

    };

    function columns(col) {
        if (destinationWrapper.clientWidth < destinationWrapper.clientHeight) {
            let rowsNumber = parseInt(destination.length / col);
            destinationWrapper.style.gridTemplateColumns = `none`;
            destinationWrapper.style.gridTemplateColumns = `repeat(${col}, ${100/col}% )`;

            if (destination.length % col !== 0) {
                rowsNumber++;
            }

            destinationWrapper.style.gridTemplateRows = `repeat(${rowsNumber}, 50%)`;
        }
    };
    on('makeArrayId', function (event, data) {
        arrayId(data.season);
    });

    on('sidebar/setFont', function (event, data) {
        setFont(data.width, data.height);
    });

    on('sidebar/setRows', function (event, data) {
        rows(data.row, data.column);
    });

    on('sidebar/setColumns', function (event, data) {
        columns(data.column);
    });
})();