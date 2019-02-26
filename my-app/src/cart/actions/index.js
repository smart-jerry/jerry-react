/**
 * Created by jerry on 2019/1/15.
 */


// 加1
export const addNumAct = (id, num) => {
	return {
		type: 'ADD_NUM',
		id:id,
		num:num+1
	}
}

// 减1
export const minusNumAct = (id, num) => {
	return {
		type: 'MINUS_NUM',
		id:id,
		num:num-1
	}
}