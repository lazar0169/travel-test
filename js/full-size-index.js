function fullSize(tempthis) {
    let tempclickedCity = document.getElementsByClassName('section-footer');
    let tempDataID = tempthis.dataset.id;

    for (let i = 0; i < tempclickedCity.length; i++) {
        if (Number(tempDataID) === destinationObject[i].id) {
            localStorage.setItem('tempDataID', tempDataID);
            window.open(`full-size.html?id=${tempDataID}`, '_self');
        }
    }
}
