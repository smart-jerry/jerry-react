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
