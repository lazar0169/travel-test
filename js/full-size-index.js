function fullSizeIndex(temp) {
    let tempclickedCity = document.getElementsByClassName('section-footer');
    for (let tempSectionFooterLength = 0; tempSectionFooterLength < tempclickedCity.length - 1; tempSectionFooterLength++) {
        if (Number(temp) === Number(destinationObject[tempSectionFooterLength].id)) {
            window.open(`full-size.html?id=${temp}`, '_self');
        }
    }
}
