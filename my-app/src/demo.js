import React, { Component } from 'react';
import banner from './images/banner.gif';
import deliveryBanner from './images/delivery-banner.jpg';
import deliveryBouns from './images/delivery-bouns.jpg';
import './demo.css';
// 倒计时
class Timer extends Component {
	// data
	constructor(props) {
		super(props);
		this.times = props.times;
		this.timerHtml = "";
	}
	// 数据设置
	componentWillUpdate (){alert(9);
		const splitTimer = function (times) {
			let day    = Math.floor(times / (60 * 60 * 24));
			let hour   = Math.floor(times / (60 * 60)) - (day * 24);
			let minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
			let second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			
			return {
				day,
				hour,
				minute,
				second
			};
		}
		
		window.setInterval(function () {
			this.times --;
			let {day, hour, minute, second} = splitTimer(this.times);
			this.timerHtml = "<div class='timer-box'><span>'"+day+"'</span> : <span>'"+hour+"'</span> : <span>'"+minute+"'</span> : <span>'"+second+"'</span></div>"
		},1000)
	}
	render() {
		console.log(this.timerHtml);alert(8);
		return  this.timerHtml;
	}
}

// main
class demo extends Component {
	// data
	constructor(props) {
		super(props);
		this.state = {opacity: 1.0};
	}
	
	// 渲染
	render () {
		let tempStyle = {'margin-bottom':'30px'};
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
						End In:
						<Timer times = {this.times}></Timer>
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
		this.times = 222222222;
		// 推荐商品
	}
}

export default demo;
