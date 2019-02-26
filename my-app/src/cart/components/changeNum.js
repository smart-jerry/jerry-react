/**
 * Created by jerry on 2019/1/15.
 */
import React from 'react';
const ChangeNum = ({ cartList, minusNum, addNum}) => (
<ul className="cart-box">
	{cartList.map(cart => (
		<li>
			<div className="img-box"><img className="img-auto-width" src={cart.img} /></div>
			<div className="info-box">
				<div className="fn-text-overflow">{cart.info}</div>
				<div>{cart.sku}</div>
				<div className="goods-price-box">
					<div className="price">{cart.price}</div>
					<div className="goods-change-num">
						<div className="num-btn-minus" onClick={()=>minusNum(cart.id, cart.num)}>-</div>
						<div className="num-box">{cart.num}</div>
						<div className="num-btn-add" onClick={()=>addNum(cart.id, cart.num)}>+</div>
					</div>
				</div>
				
			</div>
		</li>
	))}
</ul>
)

export default ChangeNum