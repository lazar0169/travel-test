windowListener("load", function () {
    trigger('setResolution', {});
});
windowListener("resize", function () {
    trigger('setResolution', {});
});
windowListener('load', function () {
    trigger('clickedSeason', {})
});
windowListener('load', function () {
    trigger('language', {});
});
windowListener('load', function (){
    trigger('makeArrayId', {})
});
windowListener("resize", function () {
    trigger('resizeGrid', {});
});
addListener('#', 'open-close-language', 'click', 'showHideLanguage')



