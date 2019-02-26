/**
 * Created by jerry on 2019/1/15.
 */
import React from 'react';
const ChangeNum = ({ cartTotal}) => (
<div className="cart-total">
	<div className="select-all">All</div>
	<div className="total-box">
		<div className="total-num">
			Sub Total:{cartTotal.currenty} {cartTotal.total}
		</div>
		<div className="checkout">check out({cartTotal.totalnum})</div>
	</div>
	
</div>
)

export default ChangeNum