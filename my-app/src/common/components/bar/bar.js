/**
 * Created by jerry on 2018/12/5.
 */
import React, { Component } from 'react';
import { Link, NavLink  } from 'react-router-dom';
import "./bar.less";
// icon图标
class Bar extends Component {
	// data
	constructor(props) {
		super(props);
		// 底部导航
		this.barlist = props.barlist || [];
		this.state = {selectIcon: '/index'};
	}
	changeIcon(s) {
		this.setState({
			selectIcon : s
		});
	}
	render() {
		return (<ul className="footer-bar">
			{
				this.barlist.map((item,index) =>
					<li onClick = {this.changeIcon.bind(this,item.href)}>
						{/*样式可以选用activeClassName="selected"或者isActive={this.myEvent}*/}
						<NavLink to={item.href} exact className={this.state.selectIcon === item.href ? "selected" : ''}>
							<div className="img-box"><img className="img-auto-width" src={this.state.selectIcon === item.href?item.imgurl_on:item.imgurl} /></div>
							<div className="bar-name">{item.name}</div>
						</NavLink>
					</li>
				)
			}
		</ul>);
	}
}

export default  Bar;
