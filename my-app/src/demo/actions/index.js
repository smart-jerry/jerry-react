/**
 * Created by jerry on 2019/1/15.
 */


let nextTodoId = 0
// 添加
export const addTodo = text => {
	console.log(text,'ddddddddddddddddaddddd');
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}
// 显示
export const setVisibilityFilter = filter => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}

// 触发
export const toggleTodo = id => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}