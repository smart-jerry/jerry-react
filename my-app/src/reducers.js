/**
 * Created by jerry on 2019/1/16.
 */
import { combineReducers } from 'redux'
//import demoRedux from './demo/reducers/index'
//import cartRedux from './cart/reducers/index'
import checkoutRedux from './checkout/reducers/index'
const rootReducer = combineReducers(checkoutRedux)

export default rootReducer