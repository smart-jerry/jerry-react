/**
 * Created by jerry on 2019/1/15.
 * state旧的状态
 * action传入的新状态
 * 得到处理后的状态
 */
const changeNum = (state = [], action) => {
	switch (action.type) {
		case 'ADD_CART':
			return [
				...state,
				{
					id: action.id,
					num: action.num
				}
			]
		case 'DELETE_CART':
			return [
				...state,
				{
					id: action.id,
					num: action.num
				}
			]
		default:
			return state
	}
}

export default changeNum