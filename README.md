## 一，环境配置
1，node： 8.11.4

2,webpack & less

## 二，遇到的问题
1, babel-loader是8.0，babel-core是6.0，版本号不匹配构建失败

2，react实时渲染；eg：倒计时

利用组件的api --> 设置状态：setState

setInterval要bind(this)

3,嵌套组件渲染问题--div标签；eg:倒计时

return 的不能是字符串，应该是react格式的html文档




