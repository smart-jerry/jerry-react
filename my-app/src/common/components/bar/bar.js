/**
 * Created by jerry on 2018/12/5.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./bar.less";
// 倒计时
class Bar extends Component {
	// data
	constructor(props) {
		super(props);
		console.log(props,'===================props');
		this.match = props.match;
		this.selectIcon = props.currentPathName;
		// 底部导航
		this.barlist = props.barlist || []
	}
	
	render() {
		return (<ul className="footer-bar">
			{
				this.barlist.map((item) =>
					<li>
						<Link to={item.href}>
							<div className="img-box"><img className="img-auto-width" src={this.selectIcon === item.name?item.imgurl_on:item.imgurl} /></div>
							<div className="bar-name">{item.name}</div>
						</Link>
					</li>
				)
			}
		</ul>);
	}
}

export default  Bar;
