// screen resolution is always 16/9
const SCREEN_RESOLUTION = 16 / 9;
//global variable, uses for language-select, on click if is true - hide language bar , if is  false - show language bar
let SHOW_HIDE = false;
//seasons array
let SEASONSLIST = {
    spring: 'spring',
    winter: 'winter',
    autumn: 'autumn',
    summer: 'summer',
    all: 'all'
}
// set rows and columns for desktop view
let setRows = 3;
let setColumns = 3;
//set columns for mobile view
let setColumnsMobile = 1;
// object with data from server
let dataObject;
// host
let host = "http://localhost:1234";
//
let isMobile = true;
let isDesktop = true;
