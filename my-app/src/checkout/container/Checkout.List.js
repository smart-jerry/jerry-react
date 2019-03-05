/**
 * Created by jerry on 2019/1/15.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addNumAct, minusNumAct } from '../actions'
import goodsList from '../components/goodsList'

// 负责输入逻辑，即将state映射到 UI 组件的参数（props）
const mapStateToProps = state => {
	let total=0; // 总金额
	let currency=''; // 币种符号
	let totalnum=0;// 总数量
	state.checkoutList.map(cart=>{
		if(!currency){
			currency = cart.currency;
		}
		total+=cart.price*cart.num
		totalnum += cart.num;
	})
	return {
		goodsList: state.checkoutList, // ui组件中的参数===json的key值
		subTotal:{
			total:total,
			totalnum:totalnum,
			currency:currency,
			charge:'20',
			deliveryTime:255555555
		}
	}
}
// 负责输出逻辑，即将用户对 UI 组件的操作映射成 Action
const mapDispatchToProps = dispatch => {
	return {
		minusNum: (id, num) => {
			if(num<2){
				return;
			}
			dispatch(minusNumAct(id, num))
		},
		addNum: (id, num) => {
			dispatch(addNumAct(id, num))
		}
	}
}

const  goodsListCon= connect(
	mapStateToProps,
	mapDispatchToProps
)(goodsList)

export default goodsListCon
