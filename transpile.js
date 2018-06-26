let fs = require('fs');
// let indexJS = '';
// let modalJS = '';
// let indexCSS = '';
// let modalCSS = '';

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
    "css/destinations.css",
    "css/materialdesignicons.min.css"
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

// // Getting all script files
// let scripts = getFiles(`js`);
// let styles = getFiles(`css`);

// // Merging files
// //let combinedFiles = prependFiles.concat(scripts).concat(style);
// for (let file of scripts) {
//     // TODO ispitivanje
//     switch (file) {
//         case modalFilesJS[0]:
//             break;
//         default:
//             indexJS += fs.readFileSync(file, 'utf8') + '\r\n';
//     }
//     switch (file) {
//         case indexFilesJS[0]:
//             break;
//         case indexFilesJS[1]:
//             break;
//         default:
//             modalJS += fs.readFileSync(file, 'utf8') + '\r\n';
//     }

// }

// for (let style of styles) {
//     switch (style) {
//         case modalFilesCSS[0]:
//             break;
//         default:
//             indexCSS += fs.readFileSync(style, 'utf8') + '\r\n';
//     }
//     switch (style) {
//         case indexFilesCSS[0]:
//             break;
//         case indexFilesCSS[1]:
//             break;
//         case indexFilesCSS[2]:
//             break;
//         default:
//             modalCSS += fs.readFileSync(style, 'utf8') + '\r\n';

//     }
// }

// // Exporting
// fs.writeFileSync(`index.js`, indexJS);
// fs.writeFileSync(`modal.js`, modalJS);

// fs.writeFileSync(`index.css`, indexCSS);
// fs.writeFileSync(`modal.css`, modalCSS);


// function getFiles(folder) {
//     let array = fs.readdirSync(folder);
//     array = array.map(path => `${folder}/${path}`);
//     for (let file of array) {
//         let stats = fs.statSync(file);
//         if (stats.isDirectory()) {
//             let files = getFiles(file);
//             array = array.concat(files);
//             array.splice(array.indexOf(file), 1);
//         }
//     }
//     return array;
// }