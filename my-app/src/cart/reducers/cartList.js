/**
 * Created by jerry on 2019/1/15.
 * state旧的状态
 * action传入的新状态
 * 得到处理后的状态
 */
let stateList =[
	{id:1,num:1,price:1.3,info:'1111111111',img:''},
	{id:2,num:2,price:2.3,info:'222222',img:''}
]
	
const cartList = (state = stateList, action) => {
	switch (action.type) {
		case 'ADD_NUM':
			return state.map(cart =>
				(cart.id === action.id)
					? {...cart, num: action.num}
					: cart
			)
		case 'MINUS_NUM':
			return state.map(cart =>
				(cart.id === action.id)
					? {...cart, num: action.num}
					: cart
			)
		default:
			return state
	}
}

export default cartList