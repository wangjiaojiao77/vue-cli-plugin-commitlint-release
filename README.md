# Vue CLI Plugin Commitlint Release

这是一个集成 [commitizen](https://www.npmjs.com/package/commitizen)、[commitlint](https://github.com/conventional-changelog/commitlint)、[standard-version](https://www.npmjs.com/package/standard-version)、[conventional-changelog](https://www.npmjs.com/package/conventional-changelog) 、[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli) 基础配置的 Vue CLI 插件。

![NPM version](https://img.shields.io/npm/v/vue-cli-plugin-commitlint-release)
![Downloads](https://img.shields.io/npm/dw/vue-cli-plugin-commitlint-release)
![License](https://img.shields.io/npm/l/vue-cli-plugin-commitlint-release)

_它可以解决以下几个问题：_

1. 自动化提示 `commit message`
2. 自动化校验 `commit message` 是否符合规范
3. 自动更新 `package.json` 里的版本号
4. 自动生成 `changelog`，更好的维护版本迭代


## 安装

_作为一个 `Vue CLI` 安装，安装方法有2种：_

```
# 为了防止和已有的包冲突，可以提前移除 `node_modules` 后再安装
rm -rf node_modules

vue add commitlint-release
# or
vue invoke commitlint-release
```

这时候你的项目里就会增加一个    `commitlint.config.js` 文件、`release.sh` 文件，以及 package.json 增加一些 `scripts`、`devDependencies`，以及一个 `config` 和 `husky` 的配置.

_下面就需要开始安装一些依赖了。_

首先，全局安装 `commitizen` 和 `cz-conventional-changelog`，并支持 `Angular` 的 `Commit message` 格式

```
npm install -g commitizen cz-conventional-changelog

commitizen init cz-conventional-changelog --save --save-exact
```

然后再运行

```
npm install
```

即可将所需依赖安装上.


## 使用

### 修改代码后，按照以下步骤执行即可.

add 
   
```
git add .
```

### 自动化 `commit message`
```
git cz
# or
# 如果你的 NPM 5.2+ 
npm run commit
```

### 自动更新版本号并生成 `changelog`

```
npm run publish
```

输入命令后，提示输入 [ major | minor | patch ]，选择哪一种参数可以参考如下解释，以当前版本 1.0.0 为例：

- major：主版本号，当你做了不兼容的 API 修改。这时候的 version 应该为 2.0.0。
- minor：次版本号，当你做了向下兼容的功能性新增。这时候的 version 应该为 1.1.0。
- patch：修订号，当你做了向下兼容的问题修正。这时候的 version 应该为 1.0.1。

具体参考：[semver 语义化版本控制规范](https://semver.org/lang/zh-CN/)

## 常见问题

### command not found: vue

解决办法：全局安装 vue cli

```
npm install -g @vue/cli
# or
yarn global add @vue/cli
```

### File exists
```
npm ERR! path /Users/jojo/node_modules/babel-eslint/node_modules/@babel/traverse/node_modules/.bin/babylon

npm ERR! code EEXIST

npm ERR! Refusing to delete /Users/jojo/wanba/front-activity/node_modules/babel-eslint/node_modules/@babel/traverse/node_modules/.bin/babylon: containing path /Users/jojo/node_modules/babel-eslint/node_modules/@babel/traverse/node_modules/babylon isn't under npm's control

npm ERR! File exists: /Users/jojo/wanba/front-activity/node_modules/babel-eslint/node_modules/@babel/traverse/node_modules/.bin/babylon

npm ERR! Move it away, and try again.
```
解决办法：
删除 node_modules 重新安装
```
rm -rf node_modules
npm i
```

### 执行 `commitizen init cz-conventional-changelog --save --save-exact` 命令的时候遇到 `A previous adapter is already configured` 错误

```
Attempting to initialize using the npm package cz-conventional-changelog
Error: Error: A previous adapter is already configured. Use --force to override
    adapterConfig.path: ./node_modules/cz-conventional-changelog
    repoPath: /Users/jojo
    CLI_PATH: /usr/local/lib/node_modules/commitizen/
    installAdapterCommand: npm install cz-conventional-changelog --save-dev
    adapterNpmName: cz-conventional-changelog
```
解决办法：加 --force

```
commitizen init cz-conventional-changelog --save --save-exact --force
```

### 全局安装 npm 包的时候遇到权限问题
```
Permission denied
```

解决办法：命令行前加 sudo 或者参考 [fixing npm permissions](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)

## Tips

我会尽我最大努力来维护这个项目，所以有问题一定要给我提 [issues](https://github.com/wangjiaojiao77/vue-cli-plugin-commitlint-release/issues) 哟～

## License

ISC
