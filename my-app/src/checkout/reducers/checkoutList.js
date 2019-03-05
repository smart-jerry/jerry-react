/**
 * Created by jerry on 2019/1/15.
 * state旧的状态
 * action传入的新状态
 * 得到处理后的状态
 */
let stateList =[
	{id:1,num:1,price:'1.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:2,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:3,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:4,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:5,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'}
]
	
const checkoutList = (state = stateList, action) => {
	switch (action.type) {
		case 'ADD_NUM':
			return state.map(item =>
				(item.id === action.id)
					? {...item, num: action.num}
					: item
			)
		case 'MINUS_NUM':
			return state.map(item =>
				(item.id === action.id)
					? {...item, num: action.num}
					: item
			)
		default:
			return state
	}
}

export default checkoutList