import React from 'react'
import CheckoutList from '../container/Checkout.List';
import '../css/checkout.less';
const Checkout = () => (
	<div className="checkout-contain">
		{/*购物车清单*/}
		<CheckoutList />
	</div>
)

export default Checkout