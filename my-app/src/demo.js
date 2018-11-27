import React, { Component } from 'react';
import banner from './images/banner.gif';
import deliveryBanner from './images/delivery-banner.jpg';
import deliveryBouns from './images/delivery-bouns.jpg';
import './demo.css';
class demo extends Component {
	// data
	constructor(props) {
		super(props);
		this.state = {opacity: 1.0};
	}
	// 渲染
	render () {
		var tempStyle = {'margin-bottom':'30px'};
		return (
			<div className="demo">
				<header className="demo-header">
					<img src={banner}/>
				</header>
				<ul className="icons-content">
					{this.lifourary.map((item) =>
						<li key={item.id}>
							<div className="img-box"><img className="img-auto-width" src={item.imgurl} /></div>
							<div>{item.title}</div>
						</li>
					)}
				</ul>
				<div className="demo-header" style={tempStyle}>
					<img src={deliveryBanner}/>
					<img src={deliveryBouns} />
					<div className="info">FREE express delivery on orders $40+</div>
				</div>
				{/*闪购商品*/}
				<div className="flashsale-box">
					<h2>Flash Sale 80% OFF</h2>
					<div className="time-later">
						End In
						{this.timer}
					</div>
					<div className="sale-content">
					
					</div>
				</div>
				{/*推荐商品*/}
				<div className="recommend-box"></div>
			</div>
		);
	}
	// 组件渲染前被调用， 设置数据
	componentWillMount () {
		this.lifourary = [
			{
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion',
				'href'   : ''
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917160185.png',
				'title'  : 'Home',
				'href'   : ''
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917152583.png',
				'title'  : 'Electronics',
				'href'   : ''
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917147034.png',
				'title'  : 'Beauty',
				'href'   : ''
			}
		]
		
		//闪购商品
		this.timer = "<span>1</span> : <span>12</span> : <span>20</span>";
		// 推荐商品
	}
}

export default demo;
