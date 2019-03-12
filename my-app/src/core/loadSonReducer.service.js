//import demoRedux from './demo/reducers/_reducer'
//import cartRedux from './cart/reducers/_reducer'
import checkoutRedux from '../checkout/reducers/_reducer'
const loadSonReducer = (requireContext) => {
	const routerUrl = requireContext.keys();
	// routerUrl: ["./cart/reducers/_reducer.js", "./checkout/reducers/_reducer.js", "./demo/reducers/_reducer.js"]
//	console.log(routerUrl, '333333333333333333333');
	const routersArr = routerUrl.map(requireContext);
	// routersArr: [{…}, {…}, {…}]
//	console.log(routersArr, '44444444444444444');
	let reducerList = [];
	routersArr.forEach((v, index) => {
		let item = v[Object.keys(v)[0]];
		// item: {cartList: ƒ}, {checkoutList: ƒ, orderInfo: ƒ}, {todos: ƒ, visibilityFilter: ƒ}
//		console.log(item.length, '55555555555555555');
		for(let key in item){
//			console.log(key,'66666666666666',item[key]);
			reducerList[key]=item[key];
		}
	});
	
	console.log(reducerList, '=============end');
	return reducerList;
}

export default loadSonReducer