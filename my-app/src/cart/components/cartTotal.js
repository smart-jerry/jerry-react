/**
 * Created by jerry on 2019/1/15.
 */
import React from 'react';
import { Link } from 'react-router-dom';
const ChangeNum = ({ cartTotal}) => (
<div className="cart-total">
	<div className="select-all">All</div>
	<div className="total-box">
		<div className="total-num">
			Sub Total:{cartTotal.currenty} {cartTotal.total}
		</div>
		
		<Link to={cartTotal.href}>
			<div className="checkout">check out({cartTotal.totalnum})</div>
		</Link>
	</div>
	
</div>
)

export default ChangeNum