var fs = require('fs');
const path = require("path");
console.log(__dirname);
const COMMON_PATH = '/src/';

const TEMP_PATH = 'designMode/'

const FILE_LIST = [
    "",
    "common",
    "reconstitution",
    "MVVM",
    "MVC",
    "MVP",
];

FILE_LIST.forEach((item) => {
    fs.writeFile(__dirname + COMMON_PATH + TEMP_PATH + (item || 'README') + ".md", `---\ntitle: ${item || TEMP_PATH}\n---\n\n暂无内容\n`, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});


