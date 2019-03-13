import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import banner from '../../images/banner.gif';
import deliveryBanner from '../../images/delivery-banner.jpg';
import deliveryBouns from '../../images/delivery-bouns.jpg';
import '../css/home.less';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import Timer from '../../common/components/timer/timer';
import Bar from '../../common/components/bar/bar';

// main
class Home extends Component {
	// data
	constructor(props) {
		super(props);
		// this.props父级方法
		this.state = {recommendList: []};// 组件本身状态
	}
	getNextPage(){
		let tempAry = [];
		for(let i=0,len=20;i<len;i++){
			tempAry.push({
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageLibrary/201808/349/07/IL201808070109327430.jpg_300x400.jpg',
				'title'  : 'Fashion FashionF888 88 8 8 8',
				'href'   : '',
				'price'  : '$1.8'
			});
		}
		this.setState({
			// 用concat追加数据
			recommendList: this.state.recommendList.concat(tempAry)
		})
	}
	// 第一次渲染后调用
	componentDidMount (){
		let swiperContain = ReactDOM.findDOMNode(this.refs['flashsale-content']);
		let mySwiper = new Swiper(swiperContain, {
			autoplay: true,//可选选项，自动滑动
			width:750,
			height:300
		});
		// 下拉加载
		let io = new IntersectionObserver(
			entries => {
//				console.log('Time: ' + entries[0].time);
//				console.log('Target: ' + entries[0].target);
//				console.log('IntersectionRatio: ' + entries[0].intersectionRatio);
//				console.log('rootBounds: ' + entries[0].rootBounds);
//				console.log(entries[0].boundingClientRect);
//				console.log(entries[0].intersectionRect);
				
				let obj = entries[0].target;//console.log(obj, '22222222222222222222');
				let getNextPage = obj.getAttribute('getnextpage');
				// 开始加载下一页
				if(entries[0].intersectionRatio >= 1 ){
					this.getNextPage();
				}
			},
			{
				/* Using default options. Details below */
				threshold: [1]
			}
		);
		// Start observing an element
		io.observe(document.getElementById('next-page'));
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
							<div className="swiper-slide" style={{'background':'orange'}}>slider1</div>
							<div className="swiper-slide" style={{'background':'yellow'}}>slider2</div>
							<div className="swiper-slide" style={{'background':'blue'}}>slider3</div>
						</div>
					</div>
				</div>
				{/*推荐商品*/}
				<div className="recommend-box">
					<h2>Recommended</h2>
					<div className="recommend-lists">
						{
							this.state.recommendList.map((item) =>
								<div className="list-box" key={item.id}>
									<div className="list-img"><img className="img-auto-width" src={item.imgurl} /></div>
									<div className="list-title">{item.title}</div>
									<div className="list-price">{item.price}</div>
								</div>
							)
						}
					</div>
					<div id="next-page" className="next-page" getnextpage={this.getNextPage.bind(this)}> loading... </div>
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
		this.state.recommendList = [
			{
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion FashionF888 88 8 8 8',
				'href'   : '',
				'price'  : '$1.8'
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion FashionFashion Fashion Fashion FashionFas hionFashio nFashionFashion FashionF ashionFashion ',
				'href'   : '',
				'price'  : '$1.5'
			},
			{
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/gallery/201811/18/IL20181118111511437.jpg_600x800x80.jpg',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$11.5'
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion FashionFashion Fashion',
				'href'   : '',
				'price'  : '$ 0.99'
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageLibrary/201808/37G/23/IL201808230025510878.jpg_600x800x80.jpg',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 2.66'
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageLibrary/201805/1DT/24/IL201805240958582756.jpg_600x800x80.jpg',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 3.09'
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 5.88'
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 5.88'
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 5.88'
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 5.88'
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 5.88'
			}, {
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 5.88'
			}
		]
	}
}

export default Home;
