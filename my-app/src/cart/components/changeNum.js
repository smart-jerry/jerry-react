/**
 * Created by jerry on 2019/1/15.
 */
import React from 'react'
const TodoList = ({ cartList, minusNum, addNum}) => (
<ul>
	{cartList.map(cart => (
		<li>
			<div><img src={cart.img} /></div>
			<div>{cart.info}</div>
			<div>{cart.price}</div>
			<div key={cart.id} onClick={()=>minusNum(cart.id, cart.num)}>-</div>
			{cart.num}---{cart.id}
			<div key={cart.id} onClick={()=>addNum(cart.id, cart.num)}>+</div>
		</li>
	))}
</ul>
	/*<div>
		<div key={cart.id} onClick={()=>minusNum(cart.id)}>-</div>
		{cart.num}
		<div key={cart.id} onClick={()=>addNum(cart.id)}>+</div>
	</div>*/
)

export default TodoList