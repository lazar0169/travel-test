let fs = require('fs');

let indexFilesJS = [
    "js/event.js",
    "js/utility.js",
    "js/data.js",
    "js/settings.js",
    "js/destinations.js",
    "js/sidebar.js",
    "js/resize.js"
];

let modalFilesJS = [
    "js/event.js",
    "js/utility.js",
    "js/data.js",
    "js/settings.js",
    "js/modal.js",
    "js/resize.js"
];

let indexFilesCSS = [
    "css/body.css",
    "css/loading.css",
    "css/index-content.css",
    "css/sidebar.css",
    "css/destinations.css"
];

let modalFilesCSS = [
    "css/body.css",
    "css/loading.css",
    "css/modal-content.css"
];
exportFile('index.js', indexFilesJS);
exportFile('modal.js', modalFilesJS);
exportFile('index.css', indexFilesCSS);
exportFile('modal.css', modalFilesCSS);

function exportFile(fileName, fileArray) {
    let file = '';
    for (let temp of fileArray) {
        file += fs.readFileSync(temp, 'utf8') + '\r\n';
    }
    fs.writeFileSync(fileName, file);
}