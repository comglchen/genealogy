
import {message} from "ant-design-vue"
import {
	$mypost
} from '../utils/myrequest.js'

export const $mylogin = async (params) => {
	console.log('进入mylogin.......')
	let res = await $mypost('http://120.26.48.204:3000/login',params)
console.log("res========>",res)
	if (res.data.length) {
		uni.navigateTo({
			url:'/pages/index/index'
		})
		message.success("登录成功！")
	}else{
		message.error("登录失败！")
	}


}