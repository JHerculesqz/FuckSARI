var child_process2 = require('child_process');
const glob = require('glob');
const path = require('path');
const PAGE_PATH = path.resolve(__dirname,'../src/pages');
var entryFiles = glob.sync(PAGE_PATH + '/*/*.js');
entryFiles.forEach((filePath)=>{
  var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
  child_process2.execFile('node', ['./build/build.js', filename], function (err, result) {
    console.log(err);
    console.log(filename, " build finish!");
  });
});
