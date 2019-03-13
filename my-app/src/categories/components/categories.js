import React, { Component } from 'react';
import { BrowserRouter,Route, Link } from 'react-router-dom';
import '../css/categories.less';

// main
class Categories extends Component {
	// data
	constructor(props) {
		super(props);
		this.state = {activeIndex: 0};
		this.match = props.match
	}
	tabclick(index,e) {
		this.setState({
			activeIndex: index
		});
	}
	// 渲染
	render () {
		const ListCat = (props) => {
			const obj = props.obj;
			let res = [];
			for(let key in obj){
				let temp = obj[key];
				// 此处必须是push，不然无法渲染
				res.push(<div className="category-contain">
					<h2>{key}</h2>
					<ul>
						{
							temp.map((itemi,indexi)=>
								<li>
									<Link to={{ pathname: itemi.href, search: "?cateId="+indexi }}>
										<div className="img-box">
											<img className="img-auto-width" src={itemi.imgurl}/></div>
										<div className="info">{itemi.title}</div>
									</Link>
								</li>
							)
						}
					</ul>
				</div>);
			}
			return res;
		}
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
						this.categoryAry[this.state.activeIndex]?(
							<ListCat obj={this.categoryAry[this.state.activeIndex]} />
						):(
							<div className="category-contain">nothing！！</div>
						)
						
					}
				</div>
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
						'href'   : '/categoryList'
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b41b8b64-98c1-41db-b1b7-bd072b47908d.jpg',
						'title'  : 'Dresses',
						'href'   : '/categoryList'
					},
					{
						'imgurl' : 'http://imcut.jollychic.com//uploads/category/style_category/b3b50318-0477-46bf-b22a-497099d3fd6e.jpg',
						'title'  : 'Blouses',
						'href'   : '/categoryList'
					}
				],
				'hot' : [
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
				'Bottoms'    : [
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
				'Lingerie & Nightwear'    : [
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
				'Styles & Offers'    : [
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
	}
}

export default Categories;
