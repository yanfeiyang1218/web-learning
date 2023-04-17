
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

// 检测目录是否存在
module.exports = function (dir,name) {
  let isExists = fs.existsSync(dir);
  if (isExists) {
    console.log(chalk.red(
      `The ${name} project already exists in  directory. Please try to use another projectName`
    ));
    process.exit(1);
  }
};