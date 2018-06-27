const view = (function () {
    let tempLeftSection = get('#left-section');
    let tempRightSection = get('#right-section');
    let tempIndexMobileView = get('#index-mobile-view-css');
    let tempShowBar = get('#show-bar');
    let tempLogo = get('#logo-article');
    let mobileView = function () {
       
        tempLogo.style.visibility = 'hidden';
        tempShowBar.style.visibility = 'visible';   
        trigger('setH2', {});    
        if(tempLeftSection.style.width != '100%'){
            trigger('substring', {});
        }
    };

    let desktopView = function () {
        tempIndexMobileView.disabled = true;
        tempLogo.style.visibility = 'visible';
        tempShowBar.style.visibility = 'hidden';
        tempLeftSection.style.width = '20%';
        tempLeftSection.style.position = 'relative';
        tempRightSection.style.visibility = 'visible';
        trigger('setH2', {});
        trigger('fullName', {});
        
    };

    on('resize/mobileView', function (event, tempData) {
        mobileView(tempData.data);
     
    });

    on('resize/desktopView', function (event, tempData) {
        desktopView(tempData.data);
   
    });
})();
