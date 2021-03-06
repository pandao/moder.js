# moder.js

Front-end Module (locale) Loader. 

前端模块（本地）加载解决方案

### 简介

- 精简版的 AMD / CMD 规范，并不完全遵守 AMD / CMD规范；
- 通过 Ajax + LocalStorage 本地存储避免重复请求模块资源，提高响应速度和交互体验；
- 配合 Gulp 插件 [gulp-moder](https://github.com/pandao/gulp-moder) 实现自动生成模块 Map，避免引入整个 [Fis](https://github.com/fex-team/fis) 架构；
- 支持模块包和加载 CSS 模块文件；

### 安装

```shell
$ bower install moder.js --save
```

### 使用方法

1、设置模块资源地图

```javascript
/**
 * 设置模块资源 Map
 * 
 * @param  {Key/Value Object|JSON String} map   模块地图键值对对象或 JSON String
 * @return {Void}                         void  无返回值
 */

require.map({
    // 模块资源列表，注意每个模块都应该定义
    res: {
        '模块A': {
            url : '模块文件地址', // 必须定义 URL，跨域请求需要服务器支持配置
            deps:  ['依赖模块1', '依赖模块2', ...]
        },
        '模块B': {
            url : '模块文件地址',
            deps:  ['依赖模块1', '依赖模块2', ...]
        },
        // CSS 模块文件
        'css/test' : {
            url : 'css/test.css', // CSS 必须加上扩展名 .css
            deps: ['css/dep']     // CSS 文件定义依赖无法保证加载顺序
        },
        '包A模块1': {
            pkg: '包名A', // 所属包
            deps:  ['依赖模块1', '依赖模块2', ...]
        }
        //...
    },
    // 包模块列表
    pkg: {
        '包名A': {
            url: '合并打包后的包文件地址，即一个文件里有多个 define',
            deps:  ['依赖模块1', '依赖模块2', ...]
        }
    }
});
```

2、使用某个模块

```javascript
// 同步请求
// require.async 另外 require.load
require.async(['模块A'], function(mod) {
    console.log(mod);
});

require(['模块1', '模块2'], function(m1, m2) {
    console.log(m1, m2);
});

// 模块文件内使用
define("模块名", function(require, exports, module){
    var mod = require('某个依赖模块');
    
    module.exports = {
        a : 23456
    };
});
```

3、使用配置

不使用本地存储：

```javascript
require.saveToLocalStorage = false; // 默认为 true
```

设置本地存储 Key 前缀（默认为空）：

> 主要是为了避免同名 Key 造成数据不对称

```javascript
// 注意需在未加载任何模块前设置
// 慎用或不随意变动，如果有变动，必须执行 localStorage.clear() 方法，
// 否则会造成旧模块 ID Key 占用额外本地存储空间，无法同步更新
require.localPrefix = 'xxx';  // 默认为空
```

存储和获取模块 Map 的版本，用于判断并及时更新本地存储：

> 有新版本时，只要刷新页面即可。

```javascript
require.setMapVersion(String|Int version); // 存储版本号
require.getMapVersion();                   // 获取版本号
```

模块资源（Ajax）请求基本路径：

```javascript
require.baseUrl = 'xxxx'; // 可以避免存储过长的 URL
```

4、本地存储后如何动态更新？

```javascript
// 只要模块文件的 URL 有变动，就会自动更新本地存储，所以每个模块都要定义 URL。
    
'模块名': {
    url : '模块文件地址', // 必须定义 URL，跨域请求需要服务器支持配置
    deps:  ['依赖模块1', '依赖模块2', ...]
}
```

5、清空本地存储的模块 Map

```javascript
require.clear(); // 别名 require.clearLocalStorage
```

### 辅助构建工具

Gulp 插件 [gulp-moder](https://github.com/pandao/gulp-moder)

### 参考项目及感谢

- [https://github.com/fex-team/mod](https://github.com/fex-team/mod) 
- [https://github.com/xiangshouding/mod-store.js](https://github.com/xiangshouding/mod-store.js)

> 基于以上项目改造，感谢以上项目的工作。

### Changes

[更新日志](https://github.com/pandao/moder.js/blob/master/CHANGE.md)

### License

The [MIT](https://github.com/pandao/moder.js/blob/master/LICENSE) License.

Copyright (C) 2016 Pandao