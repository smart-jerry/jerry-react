import React from 'react';
import { render } from 'react-dom';
import './css/index.less';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { createStore } from 'redux';
import Home from './home';
import Categories from './categories';
import Account from './account';
import Bag from './bag';
import CategoryList from './category.list';
render(
	<BrowserRouter>
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/bag" component={Bag} />
		<Route path="/categories" component={Categories} />
		<Route path="/account" component={Account} />
		<Route path="/categoryList" component={CategoryList} />
	</Switch>
	</BrowserRouter>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
