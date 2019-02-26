/**
 * Created by jerry on 2019/1/15.
 */

import { connect } from 'react-redux'
import { addNumAct, minusNumAct } from '../actions'
import ChangeNum from '../components/changeNum'

// 负责输入逻辑，即将state映射到 UI 组件的参数（props）
const mapStateToProps = state => {
	return {
		cartList: state.cartList
	}
}
// 负责输出逻辑，即将用户对 UI 组件的操作映射成 Action
const mapDispatchToProps = dispatch => {
	return {
		minusNum: (id, num) => {
			console.log(num,'=============minusNumn');
			dispatch(minusNumAct(id, num))
		},
		addNum: (id, num) => {
			console.log(num,'=============addNum');
			dispatch(addNumAct(id, num))
		}
	}
}

const  ChangeNumCon= connect(
	mapStateToProps,
	mapDispatchToProps
)(ChangeNum)

export default ChangeNumCon
