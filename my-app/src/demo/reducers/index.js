/**
 * Created by jerry on 2019/1/15.
 * 响应的抽象
 * 是纯方法
 */

import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
	todos,
	visibilityFilter
})

export default todoApp