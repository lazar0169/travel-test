windowListener('load', function () {
    connect(host,  2 , "POST", function (data) {
        trigger('modal', { data: data });
        trigger('makeArrayId', { season: 'all', data: data });
        trigger('createLanguage', { languageId: 1, data: data });
        trigger('setResolution', {});
    });
});
windowListener("resize", function () {
    trigger('setResolution', {});
});

function get(name) {
    let mark = name.charAt(0);

    switch (mark) {
        case '#':
            return document.getElementById(name.substring(1, 50));

        case '.':
            return document.getElementsByClassName(name.substring(1, 50));

        default:
            return document.getElementsByTagName(name);
    }
};

function addListener(name, event, action) {
    let div = get(name);
    let mark = name.charAt(0);
    if (mark === '#') {
        div.addEventListener(event, () => {
            trigger(action, {});
        });
    }
    else {
        for (let divNumber of div) {
            divNumber.addEventListener(event, () => {
                trigger(action, { data: divNumber.dataset.id });
            });
        }
    }
};

function windowListener(event, action) {
    window.addEventListener(event, () => {
        action();
    });
}
