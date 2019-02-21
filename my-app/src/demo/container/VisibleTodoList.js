/**
 * Created by jerry on 2019/1/15.
 */

import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/demo.todolist.lists'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case 'SHOW_COMPLETED':
			return todos.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter(t => !t.completed)
		case 'SHOW_ALL':
		default:
			return todos
	}
}
// 负责输入逻辑，即将state映射到 UI 组件的参数（props）
const mapStateToProps = state => {
	console.log(state,'55555555555555555555');
	return {
		todos: getVisibleTodos(state.todos || [], state.visibilityFilter)
	}
}
// 负责输出逻辑，即将用户对 UI 组件的操作映射成 Action
const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList
