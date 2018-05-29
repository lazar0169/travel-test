function fullSize() {
    let tempDataID = this.dataset.id;
    let tempclickedCity = document.getElementsByClassName('section-footer');

    for (let tempSectionFooterLength = 0; tempSectionFooterLength < tempclickedCity.length - 1; tempSectionFooterLength++) {
        if (Number(tempDataID) === Number(destinationObject[tempSectionFooterLength].id)) {
            localStorage.setItem('tempDataID', tempDataID);
            window.open(`full-size.html?id=${tempDataID}`, '_self');
        }
    }
}
