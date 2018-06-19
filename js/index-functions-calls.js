windowListener('load', function (){
    trigger('makeArrayId', {season: 'all'})
});
windowListener("load", function () {
    trigger('language', {});
});
windowListener("load", function () {
    trigger('setResolution', {});
});
windowListener("resize", function () {
    trigger('setResolution', {});
});






addListener('#show-bar', 'click', 'showBar');
addListener('.link-season', 'click', 'clickSeason');
addListener('#open-close-language', 'click', 'showHideLanguage');

