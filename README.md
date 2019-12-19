# Vue CLI Plugin Commitlint Release

这是一个集成 [commitizen](https://www.npmjs.com/package/commitizen)、[commitlint](https://github.com/conventional-changelog/commitlint)、[standard-version](https://www.npmjs.com/package/standard-version)、[conventional-changelog](https://www.npmjs.com/package/conventional-changelog) 、[conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli) 基础配置的 Vue CLI 插件。

_它可以解决以下几个问题：_

1. 自动化书写 `commit message`
2. 自动化校验 `commit message` 是否符合规范
3. 自动更新 `package.json` 里的版本号
4. 自动生成 `changelog`，更好的维护版本迭代


## 安装

作为一个 `Vue CLI` 安装，安装方法有2种：

```
vue add commitlint-release
# or
vue invoke commitlint-release
```

这时候你的项目里就会增加一个    `commitlint.config.js` 文件、`release.sh` 文件，以及 package.json 增加一些 `scripts`、`devDependencies`，以及一个 `config` 和 一个 `husky` 的配置.

然后再运行

```
npm install
```

即可将所需依赖安装上.


## 使用

修改代码后，按照以下步骤执行即可.

add 
   
```
git add .
```

自动化 `commit message`
```
git cz
# or
npm run commit
```

自动更新版本号并生成 `changelog`

```
npm run publish
```

## License

ISC
