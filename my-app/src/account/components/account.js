import React, { Component } from 'react';
// main
class Account extends Component {
	// 渲染
	render () {
		return (
			<div className="demo">
				敬请期待！！Account
			</div>
		);
	}
	// 组件渲染前被调用， 设置数据
	componentWillMount () {
	}
}

export default Account;
