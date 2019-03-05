/**
 * Created by jerry on 2019/1/15.
 */
import React from 'react'
import { connect } from 'react-redux'
import cartTotal from '../components/cartTotal'

// 负责输入逻辑，即将state映射到 UI 组件的参数（props）
// mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。
// connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新。
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
