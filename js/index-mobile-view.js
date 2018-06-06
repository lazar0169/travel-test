const mobileView = (function () {
    let tempLogo = get('#', 'logo-article');
    let tempShowBar = get('#', 'show-bar');

    let mobileViewPrivate = function (tempWidth) {


        if (tempWidth < 1) {

            tempLogo.style.visibility = 'hidden';

            tempShowBar.style.visibility = 'visible';
            


            let tempRightSection = get('#', 'right-section');

        }
        else {
            tempLogo.style.visibility = 'visible';

            tempShowBar.style.visibility = 'hidden';
        }



    };



    on('mobileView', function (event, tempData) {
        mobileViewPrivate(tempData.data);

    });

})();