import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import banner from './images/banner.gif';
import deliveryBanner from './images/delivery-banner.jpg';
import deliveryBouns from './images/delivery-bouns.jpg';
import './css/home.less';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import Timer from './components/timer';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// main
class Home extends Component {
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
					<div className="recommend-lists">
						{
							this.recommendList.map((item) =>
								<div className="list-box" key={item.id}>
									<div className="list-img"><img className="img-auto-width" src={item.imgurl} /></div>
									<div className="list-title">{item.title}</div>
									<div className="list-price">{item.price}</div>
								</div>
							)
						}
					</div>
				</div>
				{/*底部导航*/}
				<ul className="footer-bar">
					{
						this.barlist.map((item) =>
							<li>
								<Link to={item.href}>
									<div className="img-box"><img className="img-auto-width" src={item.imgurl} /></div>
									<div className="bar-name">{item.name}</div>
								</Link>
							</li>
						)
					}
				</ul>
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
		this.recommendList = [
			{
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
			},{
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion FashionFashion Fashion',
				'href'   : '',
				'price'  : '$ 0.99'
			},{
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageLibrary/201808/37G/23/IL201808230025510878.jpg_600x800x80.jpg',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 2.66'
			},{
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageLibrary/201805/1DT/24/IL201805240958582756.jpg_600x800x80.jpg',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 3.09'
			},{
				'imgurl' : 'http://imcut.jollychic.com//uploads/jollyimg/imageMaterialLib/201811/13/IL201811130917156362.png',
				'title'  : 'Fashion',
				'href'   : '',
				'price'  : '$ 5.88'
			}
		];
		
		// 底部导航
		this.barlist = [
			{
				"name":'home',
				"href": '/',
				"imgurl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJDNzFBREM4MzU3MjExRTdCREE1ODY1NDVERTc4NTNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJDNzFBREM5MzU3MjExRTdCREE1ODY1NDVERTc4NTNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkM3MUFEQzYzNTcyMTFFN0JEQTU4NjU0NURFNzg1M0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkM3MUFEQzczNTcyMTFFN0JEQTU4NjU0NURFNzg1M0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4uxWIOAAABN0lEQVR42uzYsQrCMBAGYHMIDo4+SgfxYdzEVVwc9B2qOOqkuz6B+BpuPoCgKDq51DuIUKTWxJzJCTn4h5KjfCRNIFVJklSYSmEmmI5+nmP6mIzj5VVG5CyHpOph6pguBxZ+hHxWR4+p0NAyJCsWfoxkw4IHJAsWPCGdseAR6YQFz8ivsRAA+RUWAiGtsRAQaYWFwEhjLAhAGmFBCPIjFgQhS7EgDPkWCwKRhdiqUGQeS9UlaCoUmcdeaenbFfnVJmjtD6B1gk4xd8FIsqWq4LqcCQEq7luol4rQCHXYkfTrpqE//qI0dI/TyeL672mgj7eyOukempRxqBldWPQuQy792aL3FDdThEZohLpBbwJcBxPoRgB0awIdWh7k3HXEjEygO0wLs6bbn0fgBbPCNDH718GHAAMACmZFA/HVeE0AAAAASUVORK5CYII="
			},
			{
				"name":'categories',
				"href": '/categories',
				"imgurl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM5ODM2Q0UzNDc2QzExRTc5NkJDOTRCNTI3Qzc3Qjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM5ODM2Q0U0NDc2QzExRTc5NkJDOTRCNTI3Qzc3Qjg1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzk4MzZDRTE0NzZDMTFFNzk2QkM5NEI1MjdDNzdCODUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk4MzZDRTI0NzZDMTFFNzk2QkM5NEI1MjdDNzdCODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7siAKwAAACqUlEQVR42uyZz0tUURTH3wwVSFGZQbmQxo0Lf0ALN25TMrAcalkbFzqSiKGJP9qMoqFSzYQ4ixkJ2lSryhEFFyK28g9IdKk7C1TMHyAFM34vnBfHyxud9+718QbnwAfPu7779et593rPPH3pdNrIhbggDyQSCd0/ww/ugSegBgTAdbAD1sES+AYWQCoUCmVnVHM8BGOg3OJ7wuxd4jlYAb1gxkrIJz96TRW9BMZBq4O5cdCByv49ZjQej7/G124StxNC6B14ZWFyGtSzsX0wCZLgJ9gGRaAKNIIWcIXdPweC3KxYPx0OTJqGOi3GY5LJL6AMdIEfZFLEFlik8TK6z4wHYEJe6ONUHbvxD7yXxhpAM7seBE/BxilaG3TfEBtrwTJsOIs16qfHam6cz+CZA51PZNqgDVaFJZDya9zhdczkPj1SJ/ESHFAu9GrNKuiKxyz/CH47EUH1ftH8Y7o6jdawPKmoNS3r6jQaYPmyohaff0e30Wss31bU2mR5oW6jf1h+Q1HrJst3dBtdZ3mlolaFrKvT6BLLg4paQVlXp9HvLG8Ct5yI4MC5TfPNmNJtdB6sUi4ajIhDHdHoXGYn07xuoynQw67FMThgU2OAHZ8iesTxqduoQU3vB3YdprO7+JR5xXRfmI1NwuTs/w4fa0J3P9oGSsB9VtnGDP1oJW2cdnBR6kfb5cZ5T2pa7cQhKMjQq8akli/bEL9Itdzhq/aj0ROqLbr2R2yDZRui6x916zOTXIxa9im0FFwFu2CN/k5+pTaxl82Loqpdbhq1EyOgz8qs3/BW9EuPvROFi3jRqGicrcwOe85oBrMvPGmUmQ1Tmxfz2mYyMr178mxF80bzRnPNqMprR7dCNDhvVF47uhXCW7dKm+dmRd/6cuW/Ivldf26NHgkwACNUu5cbLkMcAAAAAElFTkSuQmCC"
			},
			{
				"name":'bag',
				"href": '/bag',
				"imgurl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUU4NjIyRTU1MERBMTFFODhFNDZFNUUwQTM3OUVGNDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUU4NjIyRTY1MERBMTFFODhFNDZFNUUwQTM3OUVGNDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRTg2MjJFMzUwREExMUU4OEU0NkU1RTBBMzc5RUY0MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRTg2MjJFNDUwREExMUU4OEU0NkU1RTBBMzc5RUY0MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn5II6UAAAKqSURBVHja1FjPTxpBGHWXSUsTE4qVA6TRWwunHum966meOXrQBhDaA+2hjU0MJ9t7kxI2erH/gje9cdH4J8DJpJAm3RDjATHL0rfNTvOxvwTBzjDJZPbT5fPxvnlvvlEZDocL8zCUfD7/Bet7zAd/f6AoFsC3UqnUi2q1ei0LUBXA3nKQ9gBIFcuzTqezJhOjNqhvmDceqhUlJVXpaeBsg09O+FnX9T2ZGKUsGuT5iWylp0B/k3BZWqAQkkGepWKU0SASiRimafJQw54VbbIdVPkwmUzuspDSKxIQmURlP7bb7aHq+gUVkypR5TdGGE0kEl0YvX0yqZgRTdNYLpcbiECGbfcay5FD2sMR1nBkWli6nNRGo7EkTOWqek7Cpqe8VPn9fl+Y8oEjTcKW3z6UxUvToYxKdDplCLu+jMoC9B+jjLGmtKUHi+GMUjFZliWE0Uql8gjLCt+KtVqtKyWjcJvn5GRsepoSx7+E79HBYJCh1uQLVJIOasSafIFKIqY0FZKnzbNHNBo1er0eDwMZLRQKe0jygV4MZ6h4i1qTL6PxeNwg4RI+FNTuvbsPkO6GnjPqAYrGxO6cL3kvXSqVHgck8729zvTm6ViTb+n5C/gmMaL8rvuder2+g2XnPts7LqQgMY0ICoCXBSq+FQqUWhQ87b9aFCqYcVtTIFDBHZTHmsYqvQAvTbutKQyoEEaLxeI6PQ0po0qA8raxfBd57QRBP+EsT2/bo79E34/B5o/Af+nwEYvFjgH21H5fAMY25lfM3YV5HOq8AGXjvFQul1dN0zzAYxZ7x94SW7quX9z1j94l31iM2kmR8BXmIkIN82Aadtz5oIf9WZU+e0s86ci6FP5yVkDPXPZ1OiXQifONBRTfeBPLCeYVkh4jfjOVMBjbmjTfHwEGAHPZJx3pAgYvAAAAAElFTkSuQmCC"
			},
			{
				"name":'account',
				"href": '/account',
				"imgurl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyMDVEQjQzMzVGMDExRTc4MUE0QzgyQTFGM0VFODZGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyMDVEQjQ0MzVGMDExRTc4MUE0QzgyQTFGM0VFODZGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDIwNURCNDEzNUYwMTFFNzgxQTRDODJBMUYzRUU4NkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDIwNURCNDIzNUYwMTFFNzgxQTRDODJBMUYzRUU4NkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4dPl26AAAFYklEQVR42syZfWjVVRjH7/1t5mxaWs5RUGGstJJNs6hBBopiL1NIKrP8J7vlW9tahbAsLOg9aDbX8IoG/VGz1T+1ypra/qlVmNkk6y5EwV5lZG/LzaWu58DnwNPh93rvBj3whXN+5znP873n5TnPOTedzWZTecoZgmrBXEGlYJrgPMF42vsFPwm+E+wXdAk+FQzl46w4jz5XClYKbhNMCtGbBK4Q3CLYIPhN8KZgs2BfEqdeAt2ZgvcFewX3RZAMI2/6fomtqpEkWiJoEuwR3Oi0HWZ0lgtmCyYLxoLJfFuOzmGnr7H1heBFfBQ09ZcK3mA0rZwStAtaWHPDAX1/BWb0XhOkWdO1LJsi/Dewzs23g/mM6DWCbofkLsEMwZ20DSeY9mH6LMPGLmdZfYbPRERNh92Cc6kPsoEWCHI++sbxRsHX7PYh9DaymVzJYWsltlP42h1E1o9ohaBDUEq9T3C9YIuP7jjWX4+gHlKm3xjCVT2hqYVw5soWbPdRL8V3RRTRcYSPMkVyDhvJL46+y6h4ERt2reC9ALJ78GHJlrEHSsKIPq3W5HHBIkFvAAEzrfNUvYP6BDCPH2JlPjvcT3rxdZz6LMFTQUQNwftVvU7weYDhGYyklUcFizl9+kEXzh9TeqsC1mwKX/WO/yo/os+rcLVTsC1kOjOqb4f76x15Uo1sEX2DZKuKBobLcy7R2exCGyfrIkLNAlVuihGatM7CCN1aOFjdWZroaqXYHhCCtFzkbIYo0ToXR+jm4GBlrSU6llPBSkvMzGk05WVVvtVwNESvFZzFx0Mci1FySJWvjqF/VUDfIOlWucHZ5hDwnBDzYcxj8QNVboih/6DjI85xq/Xmek6q9UnMqTG78zRlE4LWh+iathq1UbfG9PGxKld5ZEhWDsQ0Ys70rBOC3iYLKgWm/A5tVjYn8PGNKk8zsapcffg+wYJ/gPPcLp3FIEh2OksgSjSXco/jzspfCQwNMaVZtQz85BSRpCbhfUlzGe8VGEYGOBYrOftzkDkh+JZAX0kQHyrEUTHMz6E+gaw8qRxg9zekRk70TPebET2qPlyQ+v+I5nLU495t5fKExsaw9l4iSP9Cxj5IuZu2GnSTiObS65GdW7kuppGJgsd5YOggiakmgthbaDnf6tD5kT4TY/rQXHoM0Y+czCYdYeAONs0GrsRxpYw+OWyESdrJsro8bn9/qsymOqCzySVbBW1O7DVn97OCGwSXsQlKWGMLadN3+nJstGLTTwyHqZT/MEm1Ryh5y02rfEi2O+ngEa7NlwgaOZtzZPfG5g+CTtoq0D2i+q/Gph9ZfdMw3E7YONqqGpZy4mgxG2KJqrdxpWiLCPZWTjt9rCzBtpbpgtvdlM8S3csRZ0dvk0Ncj7K5oN3FyCWVfvo2OTO4VNU3qVHutI9p+mRaJziprhp3s0OblY553nk44QuJXwr3ELasNOPrHm6rKbis87vcfeVk96b8gmCKWpOZAklqshm1Zqfgq9kh3xN0r38EwkbOFKxQbY15TnfYMmhU9RX4TDHd68MeIAa4P/U57T8Lto/CMbkd29pXH5tpMOrt6SBZ+z9OsM6MAtGMej5K4XOR3/OjF/JqsUqtx2Lyzk7CR6EynSiTVY8exte9Qa8zYfnoK5w2A87Dg7mGvM7pkU5Azj7ktmFjvrPkjO1Xw/LRMDEjeL7gCcEa9It4jF3G0biDi1iOXWyPY3MFv5DRm8OPnurYP0lAN8nK76G/MsHfN+a2+gwO0yMQnnaw6/fH6ZDkKmJi2k28U5kH2GN5EDxGX2Pj5rgk40y9n+zjybE29d8/xMy12/4hZkbsb0LPiPwh9q8AAwA02UCdCpyn+gAAAABJRU5ErkJggg=="
			}
		]
	}
}

export default Home;
