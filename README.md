## 一，环境配置
1，node： 8.11.4

2，webpack & less 

3，插件类：swiper

## 二，遇到的问题
1, babel-loader是8.0，babel-core是6.0，版本号不匹配构建失败

2，react实时渲染；eg：倒计时

利用组件的api --> 设置状态：setState

setInterval要bind(this)

3,嵌套组件渲染问题--div标签；eg:倒计时

return 的不能是字符串，应该是react格式的html文档

4，vw和px转换


5, 推荐商品模板渲染不出来
原因：箭头函数后面加了{}
解决方案：去掉{}


## 旅程

1，页面初步跑起来。

2，引入webpack

3，引入less、swiper

4，引入路由

5，引入redux

6，引入模板

7，引入测试用例
