
import {message} from "ant-design-vue"
import {
	$mypost
} from '../utils/myrequest.js'

export const $mylogin = async (params) => {
	console.log('进入mylogin.......')
	let res = await $mypost('http://120.26.48.204:3000/login',params)
console.log("res========>",res.data.token)
	if (res.data.results.length) {
		sessionStorage.setItem('token',res.data.token)
		//$setToken(res.data.token)
		uni.navigateTo({
			url:'/pages/index/index'
		})
		message.success("恭喜您，登录成功！")
	}else{
		message.error("用户名或密码错误，登录失败！")
	}


}