function fullSize(tempthis) {
    let tempclickedCity = document.getElementsByClassName("sectionFooter");
    let tempdataID = tempthis.dataset.id;

    for (let i = 0; i < tempclickedCity.length; i++) {
        if (tempdataID == destinationObject[i].id) {
            localStorage.setItem("tempdataID", tempdataID);
            window.open("full-size.html?id=" + tempdataID, "_self" );
        }
    }
}
