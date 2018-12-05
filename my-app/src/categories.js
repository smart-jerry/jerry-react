import React, { Component } from 'react';
import Bar from './components/bar';
import './css/categories.less';
// main
class Categories extends Component {
	// data
	constructor(props) {
		super(props);
		this.state = {activeIndex: 0};
	}
	tabclick(index,e) {
		this.setState({
			activeIndex: index
		});
	}
	// 渲染
	render () {
		return (
			<div className="categories-box">
				<div className="categories-cat">
					<ul>
						{
							this.categoryList.map((item, index) =>
								<li className={index == this.state.activeIndex?'on':''} onClick={this.tabclick.bind(this, index)}><div>{item.name}</div></li>
							)
						}
					</ul>
				</div>
				<div className="categories-detail">
					{
						this.categoryAry.map((item, index) =>
							<div className={`category-contain ${index===this.state.activeIndex?"active":""}`}>
								<h2>{item.hot[0].title}</h2>
								<ul>
								{
									item.hot.map((itemi)=>
										<li>
											<div className="img-box">
												<img className="img-auto-width" src={itemi.imgurl}/></div>
											<div className="info">{itemi.title}</div>
										</li>
									)
								}
								</ul>
							</div>
						)
					}
				</div>
				{/*底部导航*/}
				<Bar barlist = {this.barlist}></Bar>
			</div>
		);
	}
	// 组件渲染前被调用， 设置数据
	componentWillMount () {
		// 类目
		this.categoryList = [
			{
				'name':'Featured',
			},
			{
				'name':'Women\'s Clothing'
			},
			{
				'name': 'Men'
			},
			{
				'name':'Kids & Toys'
			},
			{
				'name': 'Baby & Mom'
			},
			{
				'name': 'Shoes'
			},
			{
				'name': 'bag'
			},
			{
				'name': 'Accessories'
			},
			{
				'name': 'Beauty'
			},
			{
				'name': 'Home & Living'
			},
			{
				'name': 'Mobiles & Accessories'
			},
			{
				'name': 'Underwear & Sleepwear'
			},
			{
				'name': 'Consumer Electronics'
			},
			{
				'name': 'Appliances'
			},
			{
				'name': 'Computers & Tablets'
			}
		];
		this.categoryAry = [
			{
				'new in' : [
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/3d867d5c-08fa-45c3-86b2-dcdbdba7938f.jpg',
						'title'  : 'Sweatshirts & Hoodies',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b41b8b64-98c1-41db-b1b7-bd072b47908d.jpg',
						'title'  : 'Dresses',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b3b50318-0477-46bf-b22a-497099d3fd6e.jpg',
						'title'  : 'Blouses',
						'href'   : ''
					}
				],
				'hot'    : [
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/3d867d5c-08fa-45c3-86b2-dcdbdba7938f.jpg',
						'title'  : 'Sweatshirts & Hoodies',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b41b8b64-98c1-41db-b1b7-bd072b47908d.jpg',
						'title'  : 'Dresses',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b3b50318-0477-46bf-b22a-497099d3fd6e.jpg',
						'title'  : 'Blouses',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/3d867d5c-08fa-45c3-86b2-dcdbdba7938f.jpg',
						'title'  : 'Sweatshirts & Hoodies',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b41b8b64-98c1-41db-b1b7-bd072b47908d.jpg',
						'title'  : 'Dresses',
						'href'   : ''
					}
				]
			},
			{
				'Tops & Dresses' : [
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/3d867d5c-08fa-45c3-86b2-dcdbdba7938f.jpg',
						'title'  : 'Sweatshirts & Hoodies',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b41b8b64-98c1-41db-b1b7-bd072b47908d.jpg',
						'title'  : 'Dresses',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b3b50318-0477-46bf-b22a-497099d3fd6e.jpg',
						'title'  : 'Blouses',
						'href'   : ''
					}
				],
				'Outwear'    : [
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/3d867d5c-08fa-45c3-86b2-dcdbdba7938f.jpg',
						'title'  : 'Sweatshirts & Hoodies',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b41b8b64-98c1-41db-b1b7-bd072b47908d.jpg',
						'title'  : 'Dresses',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b3b50318-0477-46bf-b22a-497099d3fd6e.jpg',
						'title'  : 'Blouses',
						'href'   : ''
					}
				],
				'hot'    : [
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/3d867d5c-08fa-45c3-86b2-dcdbdba7938f.jpg',
						'title'  : 'Sweatshirts & Hoodies',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b41b8b64-98c1-41db-b1b7-bd072b47908d.jpg',
						'title'  : 'Dresses',
						'href'   : ''
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b3b50318-0477-46bf-b22a-497099d3fd6e.jpg',
						'title'  : 'Blouses',
						'href'   : ''
					}
				]
			}
			];
		// 底部导航
		this.barlist = [
			{
				"name":'home',
				"href": '/',
				"imgurl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU2QTEzNEQ2MzU3MjExRTc5MjM2OTk3RkUwRTk3NDJCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU2QTEzNEQ3MzU3MjExRTc5MjM2OTk3RkUwRTk3NDJCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTZBMTM0RDQzNTcyMTFFNzkyMzY5OTdGRTBFOTc0MkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTZBMTM0RDUzNTcyMTFFNzkyMzY5OTdGRTBFOTc0MkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7D7xx8AAABsklEQVR42uzYv0rDQBwH8ORn0EEFwUHBF1EXH8DFF+jUNpNWFCdddSg4iH+GBopv4Avo5OIj6AO4isU6iIjxe3iRM15t0/vzy5AffOFySXsf0ss1SdjpdAJLNYGcIU25fYHsIKmNL48sIi+RmtK3jUwjsQ0sOUJm1UASJOSG6pDnSNc2NnKAbCnbdQUbmEyDyAEygzRtYskRMpDtpq1pQI6Q1rHkEGkVS46R1rDkAWkFS56QxljyiDTCkmfk2FhiQI6FJSZkYSwxIgthiRk5MjYqATKP1d7IRBLFjRyGfSFFndUm8oYcMkCP5Nj1vElAPzUfmET2GKAtOfaf1UlAj5F3zc4pBuiMpk/Y2mKOHsio86QM9WsdDdM0DZIkCQZAQ4aL6WfsOI6tPi57qQpaNqhYSk6QJzm/dHlGTk1XEdN3T235jum/mkO2kA9kl+uM1goc2+D86eeV9ppcztSsKvtny3Ix3Wr67qqrvoJW0O9a8GhZLAp9VdriYWvJE7I7wDDwn+kG2ZDtdeRxjFs0k2NEXY9yRveRHuN07EnDUOg9soJcIX2PwL4ccxl5yO/8EmAA2QadqZY8MT4AAAAASUVORK5CYII="
			},
			{
				"name":'categories',
				"href": '/categories',
				"imgurl":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM5ODZGMUI4NDc2QzExRTc5NkJDOTRCNTI3Qzc3Qjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM5ODZGMUI5NDc2QzExRTc5NkJDOTRCNTI3Qzc3Qjg1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzk4NkYxQjY0NzZDMTFFNzk2QkM5NEI1MjdDNzdCODUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk4NkYxQjc0NzZDMTFFNzk2QkM5NEI1MjdDNzdCODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ue3YhAAACoklEQVR42uyZPUgcQRTH7w4TEMXED1CLoBY2iVZ3ja2KFiYe2mkawS8IoviBX42KioqfCBYShDTRKjGKgoXY2lxn0FK7UxDRRCEqeP4fzIbncHe53Zkse3gPftzbYebxn9md2f+qOxQKueIhkqwM8vl8Zrp7QCmoBSUgH7wGl+AE7IPvYC8QCDxEKuK2sqImhL4HU+BtDH0PQR/Ebtkp9CVYBK0WbtgyaIfguydCvV7vOH57RHEzQYVmwWAYkZugkrVdg89gAxxAxAUmm4m8GFSDZpDK+u8APxdLQn9LnczEH5AstZGgJna9BrpB0GiAAPkO5YpJ1/E66NfCH/RFsTpm4x4sSG1VksgRUM9FhgsICgLqN8qamzGBqv/xjNKkD9jGWQUfIwiLVvurmJyxwYrpNPBoPOrKmUh6Jrss1qHH5EbkVK/MWAVdUcPyL+DMShGs3qkY/6SuTqElLN9QrLUp19UpNJ/lPxVr8fF5uoW+YvmFYq1zlqfrFnrF8gzFWlksv9Qt9ITlRYq13sl1dQrdZ7lfsZZfrqtT6DrLG0C2RQuZI8Yb8UO30F1wJHLyDnMW69A7P4W9mXZ1CyXT28uu6TU4bHI1h9nrk6LXMNNJLr1BpncFNIrrIVAobGQwikByTzOSSHJP238/RdBJtx/9BN6ACray1dyP0jkr/GiR2Dht4IXkR9tk46zbjxrmeUmyfLEGTcQnO3xVPzofZbXJtX9gGyzWINc/affHnbEYZewrtACkgV/gWJyT34RN7GPj5rGqXXYKjdk4o+4EfvrDifW4HBQQNSDd9k6In3Oc0ChixxwnNILYDkcKZWKHhM1bctRm+tfREReREJoQ6vRQ+bOjXUEGZ1rV5tkVtyo2z84VnXHHy39FErv+2Qp9FGAAlRPZwiOMoL0AAAAASUVORK5CYII="
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

export default Categories;