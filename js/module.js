function addCity(temp) {
    let tempData = document.getElementsByClassName('article-section');
    let tempCityNameHeader = document.getElementsByClassName('h2-city-name-header');
    let tempCityNamePar = document.getElementsByClassName('description-text');
    let tempSectionNumber = 1;
    
    for (let tempIdArray in temp) {
        for (let tempObjectLength in destinationObject) {
            if (temp[tempIdArray] === destinationObject[tempObjectLength].id) {
                if (highRate.highId().highRateID != destinationObject[tempObjectLength].id) {
                    tempData[tempSectionNumber].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                    tempCityNameHeader[tempSectionNumber].innerText = destinationObject[tempObjectLength].name;
                    tempCityNamePar[tempSectionNumber].innerText = destinationObject[tempObjectLength].desc;
                    tempData[tempSectionNumber].setAttribute('data-id', destinationObject[tempObjectLength].id);
                    tempSectionNumber++;
                }
                else {
                    tempData[0].style.backgroundImage = `url(${destinationObject[tempObjectLength].image})`;
                    tempCityNameHeader[0].innerText = destinationObject[tempObjectLength].name;
                    tempCityNamePar[0].innerText = destinationObject[tempObjectLength].desc;
                    tempData[0].setAttribute('data-id', destinationObject[tempObjectLength].id);
                }
            }
        }
    }
}





// window.addEventListener('load', arrayId);

// function arrayId() {
//     let tempIdArray = [];
//     let tempNumberOfArray = 0;
//     for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
//         tempIdArray[tempNumberOfArray] = destinationObject[tempObjectLength].id;
//         tempNumberOfArray++;
//     }
//     highRate.highRateId(tempIdArray);
//     addSection(tempIdArray);
//     addCity(tempIdArray);
// }




// {let tempSeasons = document.getElementsByClassName('link-season');
// for (let tempSeasonLength of tempSeasons) {
//     tempSeasonLength.addEventListener('click', () => {
//         let tempSeasonID = tempSeasonLength.dataset.season;
//         clickSeason(tempSeasonID);
//     });
// }
// }

// function clickSeason(tempSeason) {
//     let tempIdArray = [];
//     let tempNumberOfArray = 0;
//     let tempRightSection = document.getElementById('right-section');
//     tempRightSection.innerHTML = '';

//     if (tempSeason === 'all') {
//         arrayId();
//         resizeGrid.setResizeGrid();
//     }
//     else {
//         for (let tempObjectLength in destinationObject) {
//             let tempSeasonsArray = Object.keys(destinationObject[tempObjectLength].seasons);
//             for (let tempSeasonsArrayLength in tempSeasonsArray) {
//                 if (String(tempSeason) === String(tempSeasonsArray[tempSeasonsArrayLength])) {
//                     tempIdArray[tempNumberOfArray] = destinationObject[tempObjectLength].id;
//                     tempNumberOfArray++;
//                 }
//             }
//         }
//         highRate.highRateId(tempIdArray);
//         addSection(tempIdArray);
//         addCity(tempIdArray);
//         resizeResolution.setResolution();
//         resizeGrid.setResizeGrid();
//     }
// }







// function fullSizeIndex(temp) {
//     let tempclickedCity = document.getElementsByClassName('section-footer');
//     for (let tempSectionFooterLength = 0; tempSectionFooterLength < tempclickedCity.length - 1; tempSectionFooterLength++) {
//         if (Number(temp) === Number(destinationObject[tempSectionFooterLength].id)) {
//             window.open(`full-size.html?id=${temp}`, '_self');
//         }
//     }
// }

// //global
// let tempHighRateID;

// function highRate(tempArray) {

//     let tempRating;
//     for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {
//         if (tempArray[0] === destinationObject[tempObjectLength].id) {
//             tempRating = destinationObject[tempObjectLength].rating;
//         }
//     }

//     for (let tempNumberOfArray = 1; tempNumberOfArray < tempArray.length; tempNumberOfArray++) {
//         for (let tempObjectLength = 0; tempObjectLength < destinationObject.length; tempObjectLength++) {

//             if (tempArray[tempNumberOfArray] === destinationObject[tempObjectLength].id) {
//                 let tempRatingX = destinationObject[tempObjectLength].rating;

//                 if (tempRating < tempRatingX) {
//                     tempRating = tempRatingX;
//                     tempHighRateID = destinationObject[tempObjectLength].id;
//                 }
//             }
//         }
//     }
// }






// document.getElementById('open-close-language').addEventListener('click', showHideLanguage);
// let tempShowHide;
// function showHideLanguage() {
//     let tempShowHideLanguage = document.getElementById('language');
//     if (!tempShowHide) {
//         tempShowHide = true;
//         tempShowHideLanguage.style.visibility = 'visible';
//         document.getElementById('p-button-open-close').innerHTML = '&#9650';
//     }
//     else {
//         tempShowHide = false;
//         tempShowHideLanguage.style.visibility = 'hidden';
//         document.getElementById('p-button-open-close').innerHTML = ' &#9660';
//     }
// }

// function createLanguage() {
//     let tempSectionLanguage = document.getElementById('language');
//     for (let tempObjectLanguageLength in languageObject) {
//         let tempCreateLanguage = document.createElement('a');
//         tempCreateLanguage.className = 'list-of-language';
//         tempCreateLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
//         tempCreateLanguage.setAttribute('data-language', languageObject[tempObjectLanguageLength].language);
//         tempSectionLanguage.appendChild(tempCreateLanguage);
//     }

//     for (let tempIdLanguage of document.getElementsByClassName('list-of-language')) {
//         tempIdLanguage.addEventListener('click', () => {
//             let tempDataLanguage = tempIdLanguage.dataset.language;
//             for (let tempObjectLanguageLength = 0; tempObjectLanguageLength < languageObject.length; tempObjectLanguageLength++) {
//                 if (tempDataLanguage === languageObject[tempObjectLanguageLength].language) {
//                     let temppLanguage = document.getElementById('p-language');
//                     temppLanguage.innerHTML = languageObject[tempObjectLanguageLength].language;
//                     showHideLanguage();
//                 }
//             }
//         });
//     }

// }



// window.addEventListener('load', resizeFontFullScreen);
// window.addEventListener('resize', resizeFontFullScreen);
// function resizeFontFullScreen() {

//     let tempH1 = document.getElementById('h1-full-screen-show');
//     let tempP = document.getElementById('p-full-screen');
//     let tempH1tablePrice = document.getElementsByClassName('h1-table-price');
//     let tempTable = document.getElementsByTagName('table');
//     let tempFont = tempH1.clientWidth;
//     tempH1.style.fontSize =` ${tempFont * 0.15}px`;
//     tempP.style.fontSize = `${tempFont * 0.03}px`;
//     for (let tempTableLenght = 0; tempTableLenght < tempH1tablePrice.length; tempTableLenght++) {
//         tempH1tablePrice[tempTableLenght].style.fontSize =  `${tempFont * 0.05}px`;
//         tempTable[tempTableLenght].style.fontSize = `${tempFont * 0.03}px`;
//     }
// }




// window.addEventListener('resize', resizeGrid);
// window.addEventListener('load', resizeGrid);

// function resizeGrid() {
//     let tempMainSection = document.getElementById('main-section');
//     let tempMainSectionA = tempMainSection.clientWidth;
//     let tempMainSectionB = tempMainSection.clientHeight;

//     let tempLanguage = document.getElementById('language');
//     let tempLanguage1 = document.getElementById('open-close-language');

//     let tempFontSize = tempMainSectionA * 0.015 + 'px';
//     tempMainSection.style.fontSize = tempFontSize;
//     tempLanguage1.style.fontSize = tempFontSize;

//     let tempSection = document.getElementsByClassName('article-section');
//     let tempResize = document.getElementById('right-section');
//     let tempResizeA = tempResize.clientWidth;
//     let tempResizeB = tempResize.clientHeight;

//     if (tempMainSectionA / tempMainSectionB > SCREEN_RESOLUTION) {
//         for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempSection.length; tempArticleSectionLength++) {
//             if (tempArticleSectionLength !== 0) {
//                 tempSection[tempArticleSectionLength].style.height = `${tempResizeB / 3}px`;
//                 tempSection[tempArticleSectionLength].style.width = `${tempResizeA / 3}px`;
//             }
//             else {
//                 tempSection[tempArticleSectionLength].style.height = `${((tempResizeB * 2) / 3) + 3}px`;
//                 tempSection[tempArticleSectionLength].style.width = `${((tempResizeA * 2) / 3) + 3}px`;
//             }
//         }
//     }

//     else {
//         for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempSection.length; tempArticleSectionLength++) {
//             if (tempArticleSectionLength !== 0) {
//                 tempSection[tempArticleSectionLength].style.height = `${tempResizeB / 3}px`;
//                 tempSection[tempArticleSectionLength].style.width = `${tempResizeA / 3}px`;
//             }
//             else {
//                 tempSection[tempArticleSectionLength].style.height = `${((tempResizeB * 2) / 3) + 3}px`;
//                 tempSection[tempArticleSectionLength].style.width = `${((tempResizeA * 2) / 3) + 3}px`;
//             }
//         }
//     }
//     let tempCityNameHeaderH2 = document.getElementsByClassName('h2-city-name-header');

//     for (let tempArticleSectionLength = 0; tempArticleSectionLength < tempSection.length; tempArticleSectionLength++) {
//         let tempSectionA = tempSection[tempArticleSectionLength].clientHeight;
//         tempCityNameHeaderH2[tempArticleSectionLength].style.height = `${tempSectionA * 0.2}px`;
//         tempCityNameHeaderH2[tempArticleSectionLength].style.fontSize = `${tempSectionA * 0.15}px`;
//     }
// }







// window.addEventListener("load", function () {
//     resizeResolution.setResolution();
// });

// window.addEventListener("resize", function () {
//     resizeResolution.setResolution();
// });

// const SCREEN_RESOLUTION = 16 / 9;
// const resizeResolution = (function () {
//     let width, height;
  
//     let setResolution = function () {
        
//         let tempBody = document.getElementsByTagName('body');
//         let tempMainSection = document.getElementById('main-section');
//         let tempClientWidth = tempBody[0].clientWidth;
//         let tempClientHeight = tempBody[0].clientHeight;
//         let tempResolution = tempClientWidth / tempClientHeight;

//         // if a<960 
//         if (tempResolution >= SCREEN_RESOLUTION) {
//             let tempNewClientWidth = tempClientHeight * SCREEN_RESOLUTION ;
//             let tempNewClientWidthPx = `${tempNewClientWidth}px`;
//             tempMainSection.style.width = tempNewClientWidthPx;
//             tempMainSection.style.height =`${tempClientHeight}px`;

//         }
//         else {
        
//             let tempNewClientHeight = tempClientWidth / SCREEN_RESOLUTION
//             let tempNewClientHeightPx = `${tempNewClientHeight}px`;
//             width = tempClientWidth;
//             height =tempNewClientHeight;
//             tempMainSection.style.height = tempNewClientHeightPx;
//             tempMainSection.style.width = `${tempClientWidth}px`;
           

//         }
//         return {
//             width: width,
//             height: height
//         };
//     }

//     return {
//         setResolution: setResolution
//     };
// })();

// function setResolution() {
//     let tempBody = document.getElementsByTagName('body');
//     let tempMainSection = document.getElementById('main-section');
//     let tempClientWidth = tempBody[0].clientWidth;
//     let tempClientHeight = tempBody[0].clientHeight;
//     let tempResolution = tempClientWidth / tempClientHeight;


//     // if a<960 
//     if (tempResolution >= SCREEN_RESOLUTION) {
//         let tempNewClientWidth;
//         tempNewClientWidth = `${tempClientHeight * SCREEN_RESOLUTION}px`;
//         tempMainSection.style.width = tempNewClientWidth;
//         tempMainSection.style.height = '100%';

//     }
//     else {
//         let tempNewClientHeight;
//         tempNewClientHeight = `${tempClientWidth / SCREEN_RESOLUTION}px`;
//         tempMainSection.style.height = tempNewClientHeight;
//         tempMainSection.style.width = '100%';
//     }
// }


