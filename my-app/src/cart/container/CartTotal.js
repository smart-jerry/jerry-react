/**
 * Created by jerry on 2019/1/15.
 */
import React from 'react'
import { connect } from 'react-redux'
import cartTotal from '../components/cartTotal'

// 负责输入逻辑，即将state映射到 UI 组件的参数（props）
const mapStateToProps = state => {
	let total=0; // 总金额
	let currency=''; // 币种符号
	let totalnum=0;// 总数量
	state.cartList.map(cart=>{
		if(!currency){
			currency = cart.currency;
		}
		total+=cart.price*cart.num
		totalnum += cart.num;
	})
	return {
		cartTotal: {
			total:total.toFixed(2),
			currenty:currency,
			totalnum:totalnum
		}
	}
}
const  CartTotal= connect(
	mapStateToProps
)(cartTotal)

export default CartTotal
