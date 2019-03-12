/**
 * Created by jerry on 2019/1/15.
 */


// 下单
export const FETCH_POSTS_REQUEST = (text) => {
	return {
		type: 'FETCH_POSTS_REQUEST',
		text
	}
}

export const FETCH_POSTS_FAILURE = (text) => {
	return {
		type: 'FETCH_POSTS_FAILURE',
		text
	}
}

export const FETCH_POSTS_SUCCESS = (text) => {
	return {
		type: 'FETCH_POSTS_SUCCESS',
		text
	}
}

export const gotoOrder = postTitle => (dispatch, getState) => {
	dispatch(FETCH_POSTS_REQUEST({text : '请求发送中...', isShow:true}))
	return fetch(`/data/${postTitle}.json`)
	.then(response => response.json())
	.then(json =>
		{
			console.log(json);
			window.setTimeout(function () {
				dispatch(FETCH_POSTS_SUCCESS({text : '下单成功！！',isShow:true}))
			},2000)
			
			// 关闭弹窗
			window.setTimeout(function () {
				dispatch(FETCH_POSTS_SUCCESS({text : '下单成功！！',isShow:false}))
			},4000)
		}
	);
};