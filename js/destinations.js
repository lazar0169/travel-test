const description = (function () {
    let destinationWrapper = get('#right-section');
    let destination = get('.article-section');
    let destinationName = get('.model-name');
    let destinationText = get('.description-text');
    let destinationDescription = get('.read-more');

    function arrayId(destinationSeason, data) {
        let idArray = [];
        let numberOfArray = 0;
        if (destinationSeason === 'all') {
            for (let object = 0; object < data.destination.length; object++) {
                idArray[numberOfArray] = data.destination[object].id;
                numberOfArray++;
            }
        }
        else {
            for (let object in data.destination) {
                let seasonsArray = Object.keys(data.destination[object].seasons);
                for (let season in seasonsArray) {
                    if (String(destinationSeason) === String(seasonsArray[season])) {
                        idArray[numberOfArray] = data.destination[object].id;
                        numberOfArray++;
                    }
                }
            }
        }
        highRate(idArray, data);
    };

    function highRate(array, data) {
        let rating;
        let highRateID;
        for (let objectNumber = 0; objectNumber < data.destination.length; objectNumber++) {
            if (array[0] === data.destination[objectNumber].id) {
                rating = data.destination[objectNumber].rating;
                highRateID = data.destination[objectNumber].id;
                break;
            }
        }

        for (let numberOfArray = 1; numberOfArray < array.length; numberOfArray++) {
            for (let objectNumber = 0; objectNumber < data.destination.length; objectNumber++) {
                if (array[numberOfArray] === data.destination[objectNumber].id) {
                    let ratingX = data.destination[objectNumber].rating;
                    if (rating < ratingX) {
                        rating = ratingX;
                        highRateID = data.destination[objectNumber].id;
                        break;
                    }
                    else {
                        break;
                    }
                }
            }
        }
        addSection(array, data);
        addCity(array, highRateID, data);
    };

    function addSection(array, data) {
        for (let sectionNumber in array) {
            destinationWrapper.innerHTML += `<section id="section-${Number(sectionNumber)}" class="article-section"></section>`

            destination[sectionNumber].innerHTML =  `<section class="section-footer">
            <h2 class="model-name"></h2>
            <p class="description-text"></p>
            <button class= "read-more">Read more</button>
            </section>`

            destination[sectionNumber].addEventListener('click', () => {
                index(destination[sectionNumber].dataset.id);
            })
        }
    };

    function addCity(array, highRateID, data) {
        let sectionNumber = 1;
        for (let id in array) {
            for (let object in data.destination) {
                if (array[id] === data.destination[object].id) {
                    if (highRateID !== data.destination[object].id) {
                        destination[sectionNumber].style.backgroundImage = `url(${data.destination[object].image})`;
                        destinationName[sectionNumber].innerHTML = data.destination[object].name;
                        destinationText[sectionNumber].innerHTML = data.destination[object].desc;
                        destination[sectionNumber].dataset.id = data.destination[object].id;
                        sectionNumber++;
                        break;
                    }
                    else {
                        destination[0].style.backgroundImage = `url(${data.destination[object].image})`;
                        destinationName[0].innerText = data.destination[object].name;
                        destinationText[0].innerText = data.destination[object].desc;
                        destination[0].dataset.id = data.destination[object].id;
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
        let rowsNumber = Math.ceil(destination.length / row);
        let rowsHeight = Math.floor(destinationWrapper.clientHeight / row);
        let columnWidth = Math.floor(destinationWrapper.clientWidth / col);
        rowsNumber++;
        destinationWrapper.style.gridTemplateColumns = `none`;
        destinationWrapper.style.gridTemplateRows = `none`;
        destinationWrapper.style.gridTemplateColumns = `repeat(${col}, ${columnWidth}px)`;
        destinationWrapper.style.gridTemplateRows = `repeat(${rowsNumber}, ${rowsHeight}px)`;
    };

    function columns(col) {
        if (destinationWrapper.clientWidth < destinationWrapper.clientHeight) {
            let rowsNumber = Math.ceil(destination.length / col);
            destinationWrapper.style.gridTemplateColumns = `none`;
            destinationWrapper.style.gridTemplateColumns = `repeat(${col}, ${100 / col}% )`;
            destinationWrapper.style.gridTemplateRows = `repeat(${rowsNumber}, 50%)`;
        }
    };

    on('makeArrayId', function (event, data) {
        arrayId(data.season, data.data);
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