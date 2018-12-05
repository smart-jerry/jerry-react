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
render(
	<BrowserRouter>
	<Switch>
		<Route path="/" exact component={Categories} />
		<Route path="/bag" component={Bag} />
		<Route path="/Categories" component={Categories} />
		<Route path="/Account" component={Account} />
	</Switch>
	</BrowserRouter>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
