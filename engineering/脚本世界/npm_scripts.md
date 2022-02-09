## npm 常用命令

```
npm init // 初始化工程
npm run // run scripts
npm install // 安装依赖
npm update // 升级依赖
npm bin // 查看bin文件目录
npm link // 将工程软链接到全局
npm publish // 发布包
npm deprecate // 废弃包
npm help

```

## 内部变量 $npm_package_*

```
$npm_package_name # name in package.json

```

## 参数传递 “--” 透传参数

```
{
  "scripts": {
    "serve":"serve ./build",
    "serve:prod": "npm run serve -- -l 80"
  }
}

```

## 脚本钩子

// 脚本钩子类似于hook, 当事件触发时，对应的钩子逻辑也被触发 
// git hook , web hook .eg

// 部分npm内置脚本钩子
// preinstall # 执行 npm install 前执行脚本
// ~~~
