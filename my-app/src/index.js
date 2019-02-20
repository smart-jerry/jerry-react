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

// store
/*
* action作用于store
* reducer根据store响应
* store是唯一的
* store包含了完整是state
* state完全可预测
* */
import { createStore } from 'redux'
import rootReducer from './reducers';
const store = createStore(rootReducer);
console.log(store, 55555555555);
// 可以手动订阅更新，也可以事件绑定到视图层。
//store.subscribe(() =>
//	console.log(store.getState())
//);
render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path="/cart" component={Cart}/>
				<Route path="/categories" component={Categories}/>
				<Route path="/account" component={Account}/>
				<Route path="/categoryList" component={CategoryList}/>
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
