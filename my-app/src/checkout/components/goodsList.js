/**
 * Created by jerry on 2019/3/5.
 */
import React from 'react';
const goodsList = ({ goodsList, subTotal,orderStatus, orderNow}) => (
<div className="checkout-box">
	<div className="checkout-info">
		<ul className="goods-list">
			{goodsList.map(goods => (
				<li>
					<div className="img-box"><img className="img-auto-width" src={goods.img} /></div>
				</li>
			))}
		</ul>
		<div className="info">Shipping Charge:{subTotal.charge} {subTotal.currency}</div>
		<div className="info">Delivery Time:{subTotal.deliveryTime}</div>
		<div className="info">Product Total:{subTotal.totalnum}</div>
		<div className="info">Sub Total:{subTotal.total} {subTotal.currency}</div>
		<div style={{'height':'200px'}}>
			
			test
		</div>
		<div style={{'height':'200px'}}>
			
			test
		</div>
		<div style={{'height':'200px'}}>
			
			test
		</div>
		<div style={{'height':'200px'}}>
			
			test
		</div>
	</div>
	<div className="order-box">
		<div className="grand-total">Grand Total: {subTotal.total} {subTotal.currency}</div>
		<div className="order-btn" onClick={()=>orderNow(subTotal)}>Proceed to Payment</div>
	</div>
	
	<div className="request-box" style={{"display":orderStatus.isShow?"block":"none"}}>
		{orderStatus.text}
	</div>
	<div className="request-box-mask" style={{"display":orderStatus.isShow?"block":"none"}}></div>
	
	
</div>
)

export default goodsList