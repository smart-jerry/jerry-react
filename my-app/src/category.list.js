import React, { Component } from 'react';
// main
class CategoriesList extends Component {
	// data
	constructor(props) {
		super(props);
	}
	// 渲染
	render () {
		let params = new URLSearchParams(location.search);
		console.log(params,'8888888888888888888888888888');
		return (
			<div className="demo">
				敬请期待！！category list==={params.get("cateId")}
				<br />
				<input type="date" />
			</div>
		);
	}
}

export default CategoriesList;
