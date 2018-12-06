## 一，环境配置
1，node： 8.11.4

2，webpack & less 

3，插件类：swiper

## 二，遇到的问题
(√)1, babel-loader是8.0，babel-core是6.0，版本号不匹配构建失败

(√)2，react实时渲染；eg：倒计时

利用组件的api --> 设置状态：setState

setInterval要bind(this)

(√)3,嵌套组件渲染问题--div标签；eg:倒计时

return 的不能是字符串，应该是react格式的html文档

4，vw和px转换


(√)5, 推荐商品模板渲染不出来
原因：箭头函数后面加了{}
解决方案：去掉{}

(√)6，引入react-router控制台报错'location' of undefined

原因：React Router被拆分成三个包：react-router,react-router-dom和react-router-native，目前网站搭建只需要引入react-router-dom即可； 路由器组件无法接受两个及以上的子元素；
解决方案：引入react-router-dom

7,子路由刷新 404？
eg：127.0.0.1:8080/bag



(√)8,样式引入
 三目运算，结果包含多个类 
 `<div className={index === this.state.active ? "active title" : 'title'}> 标题 </div> `
 
 // 使用数组的join方法组合class 
 `<div className={["container tab", index===this.state.currentIndex?"active":null].join(' ')}>此标签是否选中</div> `
 
 // 使用`${}`字符串运算 
 `<div className={`container tab ${index===this.state.currentIndex?"active":""}`}>此标签是否选中</div>`
 
 // style方式
 `<div className="swiper-slide" style={{'background':'orange'}}>slider1</div>`
 
 (√)9,react map渲染json数据
 return里面用不了json，抽离成组件，在组件中使用
 
 (√)10, webpack 构建的问题？
 10.1，HtmlWebpackPlugin插件生成是index.html不是指定模板生成的，没有id为root的div,
 filename值写错了，写成了路径
 
 10.2，构建html-webpack-plugin 报错 Entrypoint undefined = index.html
 错误不影响，不管
 
 

## 旅程

1，页面初步跑起来。(√)

2，引入webpack(√)

3，引入less、swiper(√)

4，引入路由(√)

5, 请求

6，引入redux

7，引入模板

8，引入测试用例
