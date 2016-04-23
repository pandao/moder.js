## v0.1.x

### v0.1.0

实现基本功能。

## v0.2.x

### v0.2.0

- 重构项目：修复无法执行加载后的回调处理函数等问题；
- 添加使用示例；
- 更新测试目录及测试实例；
- 新增 `preload()` 方法；
- 更新文档注释及 `README.md` 等；

### v0.2.1

- 新增 `localPrefix` 配置属性，用于设置本地存储模块 ID Key 的前缀；
- 更新使用示例、文档注释及 `README.md` 等；

### v0.2.2

- 修复设置 `localPrefix` 配置属性无效的问题；

### v0.2.3

- 修复模块文件 URL 更新后，本地存储无法同步更新的问题；

### v0.2.4

- 新增配置属性 `mapVersionKey`，用于设置本地存储模块 Map 版本的 key；
- 新增方法 `setMapVersion(String|Int version)`，用于将模块 Map 版本号存储在本地；
- 新增方法 `getMapVersion()`，用于从本地获取模块 Map 的版本号；

### v0.2.5

- 新增配置属性 `baseUrl`，用于设定 Ajax 请求模块资源的基本路径，避免存储过长的 URL；