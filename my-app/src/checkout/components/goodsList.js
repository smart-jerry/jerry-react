/**
 * Created by jerry on 2019/3/5.
 */
import React from 'react';
const goodsList = ({ checkoutList, minusNum, addNum}) => (
<ul className="cart-box">
	{checkoutList.map(goods => (
		<li>
			<div className="img-box"><img className="img-auto-width" src={goods.img} /></div>
		</li>
	))}
</ul>
)

export default goodsList