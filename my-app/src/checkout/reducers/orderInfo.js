/**
 * Created by jerry on 2019/3/11.
 * state旧的状态
 * action传入的新状态
 * 得到处理后的状态
 */
const orderInfo = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_POSTS_REQUEST':
			return action.text
		case 'FETCH_POSTS_FAILURE':
			return action.text
		case 'FETCH_POSTS_SUCCESS':
			return action.text
		default:
			return state
	}
}

export default orderInfo