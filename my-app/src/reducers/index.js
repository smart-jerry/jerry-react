/**
 * Created by jerry on 2019/1/16.
 */
import { combineReducers } from 'redux'
import demoRedux from '../demo/reducers/index'
//import cartRedux from '../cart/reducers/index'

const rootReducer = combineReducers(demoRedux)

export default rootReducer