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
	{id:5,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:6,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:7,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:8,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:9,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:10,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:11,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:12,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:13,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:14,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:15,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:16,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:17,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:18,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:19,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:20,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:21,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
	{id:22,num:2,price:'2.3',currency:'$',info:'Mini Face Cleaner Ultrasonic Pulse Silicone Electric Cleansing Apparatus',sku:' SIZE:Free / Blue', img:'https://imcut.jollychic.com//uploads/jollyimg/gallery/201807/19/IL20180719152802887.jpg'},
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