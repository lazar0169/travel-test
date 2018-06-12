windowListener("load", function () {
    trigger('setResolution', {});
});
windowListener("load", function () {
    trigger('language', {});
});

windowListener("resize", function () {
    trigger('setResolution', {});
});

windowListener('load', function (){
    trigger('makeArrayId', {season: 'all'})
});


windowListener("resize", function () {
    trigger('resizeGrid', {});
});

addListener('#open-close-language', 'click', 'showHideLanguage');
addListener('#show-bar', 'click', 'showBar');
addListener('.link-season', 'click', 'clickSeason');


