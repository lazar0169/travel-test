const showBar = (function () {
    let tempLeftSection = get('#left-section');
    let tempRightSection = get('#right-section');
    let showBarPrivate = function () {
        if (tempLeftSection.style.width != '100%') {
            tempLeftSection.style.width = '100%';
            tempLeftSection.style.position = 'absolute';
            tempRightSection.style.visibility = 'hidden';
            trigger('fullName', {});
       
        }
        else {
            trigger('hideBar', {});
        }
    };

    let hideBarPrivate = function () {
        if (tempLeftSection.style.width != '20%') {
            tempLeftSection.style.width = '20%';
            tempLeftSection.style.position = 'relative';
            tempRightSection.style.visibility = 'visible';
            trigger('substring', {});
        }
    };

    on('hideBar', function () {
        hideBarPrivate();
    });

    on('showBar', function () {
        showBarPrivate();
    });
})();

