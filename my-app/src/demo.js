import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import banner from './images/banner.gif';
import deliveryBanner from './images/delivery-banner.jpg';
import deliveryBouns from './images/delivery-bouns.jpg';
import './css/demo.less';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
// 倒计时
class Timer extends Component {
	// data
	constructor(props) {
		super(props);
		this.times = props.times;
		this.state = {
			day:0,
			hour:0,
			minute:0,
			second:0
		}
	}
	// 倒计时
	componentDidMount() {
		const splitTimer = function (times) {
			let day = Math.floor(times / 86400);
			let hour = Math.floor((times - day * 86400) / 3600);
			let minute = Math.floor((times - day * 86400 - hour * 3600) / 60);
			let second = times - day * 86400 - hour * 3600 - minute * 60;
			
			return {
				day,
				hour,
				minute,
				second
			};
		}
		this.timer = setInterval(function () {
			this.times -- ;
			let {day, hour, minute, second} = splitTimer(this.times);
			
			this.setState ({
				day:day,
				hour:hour>9?hour:'0'+hour,
				minute:minute>9?minute:'0'+minute,
				second:second>9?second:'0'+second
			});
		}.bind(this), 1000);
	}
	
	render() {
		return (<div class="timer-box">
			<span>{this.state.day}</span> day(s)
			<span>{this.state.hour}</span> :
			<span>{this.state.minute}</span> :
			<span>{this.state.second}</span>
		</div>);
	}
}

// main
class Demo extends Component {
	// data
	constructor(props) {
		super(props);
		this.state = {opacity: 1.0};
	}
	// 第一次渲染后调用
	componentDidMount (){
		let swiperContain = ReactDOM.findDOMNode(this.refs['flashsale-content']);
		let mySwiper = new Swiper(swiperContain, {
			autoplay: true,//可选选项，自动滑动
			width:750,
			height:300
		})
	}
	// 渲染
	render () {
		let tempStyle = {'margin-bottom':'10px'};
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
						End in: <Timer times={this.times}></Timer>
					</div>
					<div className="swiper-container flashsale-content" ref="flashsale-content">
						<div className="swiper-wrapper">
							<div className="swiper-slide">slider1</div>
							<div className="swiper-slide">slider2</div>
							<div className="swiper-slide">slider3</div>
						</div>
					</div>
				</div>
				{/*推荐商品*/}
				<div className="recommend-box">
					<h2>Recommended</h2>
				</div>
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
		this.times = 268945;
		// 推荐商品
	}
}

export default Demo;
