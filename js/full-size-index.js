function fullSize(tempthis) {
    let tempclickedCity = document.getElementsByClassName('section-footer');
    let tempDataID = tempthis.dataset.id;

    for (let tempSectionFooterLength = 0; tempSectionFooterLength < tempclickedCity.length-1; tempSectionFooterLength++) {
        if (Number(tempDataID) === Number(destinationObject[tempSectionFooterLength].id)) {
            localStorage.setItem('tempDataID', tempDataID);
            window.open(`full-size.html?id=${tempDataID}`, '_self');
        }
    }
}
