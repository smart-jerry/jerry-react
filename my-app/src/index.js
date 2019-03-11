import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './css/base.less';
import Home from './home/components/home';
import Categories from './categories/components/categories';
import CategoryList from './categories/components/category.list';
import Account from './account/components/account';
import Cart from './cart/components/index';
import DemoTodoList from './demo/components/demo.todolist';// redux demo todolist
import Checkout from './checkout/components/index'; // 下单checkout页面

// store
/*
* action作用于store
* reducer根据store响应
* store是唯一的
* store包含了完整是state
* state完全可预测
* */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// Redux 提供createStore这个函数，用来生成 Store。
const store = createStore(
	rootReducer,
	applyMiddleware(thunk)
);
// store.getState(),store.subscribe(),store.dispatch() 三个方法
console.log(store, 55555555555);
// 可以手动订阅更新，也可以事件绑定到视图层。
//store.subscribe(() =>
//	console.log(store.getState())
//);
// 通过react-redux的Provider传递store，下面的所有子组件就默认都可以拿到state了。它的原理是React组件的context属性
render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/cart" component={Cart}/>
				<Route path="/categories" component={Categories}/>
				<Route path="/account" component={Account}/>
				<Route path="/categoryList" component={CategoryList}/>
				<Route path="/checkout" component={Checkout}/>
				{/*todolist demo*/}
				<Route path="/demoTodoList" component={DemoTodoList}/>
				<Redirect to="/"/>{/*404重定向*/}
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change.
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
