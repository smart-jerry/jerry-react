import React from 'react'
import ChangeNumCon from '../container/ChangeNum';
import CartTotal from '../container/CartTotal';
import '../css/cart.less';
const Cart = () => (
	<div className="cart-contain">
		{/*购物车清单*/}
		<ChangeNumCon />
		{/*购物车总计*/}
		<CartTotal />
	</div>
)

export default Cart