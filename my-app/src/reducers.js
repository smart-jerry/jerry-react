/**
 * Created by jerry on 2019/1/16.
 */
import { combineReducers } from 'redux'
import loadSonReducer from './core/loadSonReducer.service'
// 自动加载子reducer
const loadSonReducerList = loadSonReducer(require.context('./', true, /_reducer\.js$/));
const rootReducer = combineReducers(loadSonReducerList)

export default rootReducer