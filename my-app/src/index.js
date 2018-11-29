import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import App from './App';
import Demo from './demo'; // 名称Demo必须大写，否则渲染失败
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Demo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
