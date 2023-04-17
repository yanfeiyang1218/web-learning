# 前端学习

####  如何开发
可用于控制台选择的工具：inquirer
可处理控制台命令的工具：commander
可改变输出log颜色的工具：chalk
可执行shell命令的工具: child_process

#### 检测目录是否存在

`

// utils/checkDire.js
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

module.exports = function (dir,name) {
  let isExists = fs.existsSync(dir);
  if (isExists) {
    console.log(chalk.red(
      `The ${name} project already exists in  directory. Please try to use another projectName`
    ));
    process.exit(1);
  }
`
#### 配置文件

// config/index.js
配置文件
/*
  @dest: 使用配置文件
  @Author: tree
 */
module.exports  = {
  promptTypeList:[{
      type: 'list',
      message: '请选择拉取的模版类型:',
      name: 'type',
      choices: [{
        name: 'mobile',
        value: {
          url: '',
          gitName: 'vue-web-template',
          val:'移动端模版'
        }
      },{
        name: 'pc',
        value: {
          url: 'https://github.com/littleTreeme/vue-web-template.git',
          gitName: 'vue-web-template',
          val:'PC端模版'
        }
      }]
  }],
};

#### 工具详解 - inquirer

`
const inquirer = require('inquirer');

const promptList = [
     type: 'list',
     message: '请选择拉取的模版类型:',
     name: 'type',
      choices: ['mobile','pc']
];

inquirer.prompt(promptList).then(type => {
    console.log(type); // 返回 mobile 或 pc
})
`

#### commander- commander API 🔗使用文档

const commander = require('commander');
commander.version(version, '-v, --version')
  .command('init <projectName>')
  .alias("i")
  .description("输入项目名称，初始化项目模版")
  .action(async (projectName,cmd) => {
      console.log(projectName,'你输入的<projectName>')
  })
commander.parse(process.argv);
  
// command – 定义命令行指令，后面可跟上一个name，用空格隔开
// alias – 定义一个更短的命令行指令
// description – 描述，它会在help里面展示
// option – 定义参数
// action – 注册一个callback函数
// parse - 解析命令行


