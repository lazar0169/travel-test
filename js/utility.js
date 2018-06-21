windowListener('load', function () {
    trigger('makeArrayId', { season: 'all' });
    trigger('language', {});
    trigger('setResolution', {});
    trigger('modal', {});
});
windowListener("resize", function () {
    trigger('setResolution', {});
});



function get(tempName) {
    let tempSelector = tempName.charAt(0);

    switch (tempSelector) {
        case '#':
            return document.getElementById(tempName.substring(1, 50));
            break;

        case '.':
            return document.getElementsByClassName(tempName.substring(1, 50));
            break;

        default:
            return document.getElementsByTagName(tempName);
    }

};

function addListener(tempName, tempEvent, tempFunction) {
    let tempDiv = get(tempName);
    let tempSelector = tempName.charAt(0);
    if (tempSelector === '#') {
        tempDiv.addEventListener(tempEvent, () => {
            trigger(tempFunction, {});
        });
    }
    else {
        for (let tempDivLength of tempDiv)
            tempDivLength.addEventListener(tempEvent, () => {
                trigger(tempFunction, { data: tempDivLength.dataset.id });
            });
    }
};

function windowListener(tempEvent, tempFunction) {
    window.addEventListener(tempEvent, () => {
        tempFunction();
    });
}
