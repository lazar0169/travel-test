windowListener("load", function () {
    //resizeResolution.setResolution();
    trigger('setResolution', { });

    
});
windowListener("resize", function () {
    //resizeResolution.setResolution();
    trigger('setResolution', { });
});
windowListener('load', setClickSeason.clickedSeason);
windowListener('load', function(){
    trigger('language', { });
});
windowListener('load', makeArrayId.arrayId);
//for resizeGrid
windowListener("load", function () {
    trigger('resizeGrid', { });
});
windowListener("resize", function () {
    trigger('resizeGrid', { });
});


addListener('#', 'open-close-language', 'click', showHideLanguage.showHide)



