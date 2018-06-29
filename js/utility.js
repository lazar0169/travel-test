windowListener('load', function () {
    trigger('makeArrayId', { season: 'all' });
    trigger('language', { languageId: 1 });
    trigger('modal', {});
    trigger('setResolution', {});

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
