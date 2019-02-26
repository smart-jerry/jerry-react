import React, { Component } from 'react';
import Bar from '../../common/components/bar/bar';
import ChangeNumCon from '../container/ChangeNum';
const Cart = ({barlist, cartList, text}) => (
	<div className="cart-box">
		<div>敬请期待！</div>
		<ChangeNumCon />
		{/*底部导航*/}
		{/*<Bar barlist={barlist}></Bar>*/}
	</div>
)

export default Cart