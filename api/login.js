import {$post} from '../utils/request'
import {message} from "ant-design-vue"
import md5 from "js-md5"
//登录api
export const $login =async(params)=>{
   // params.password =md5(params.password)
   console.log(params.password)
   let data =await $post('login',params)
   if(data.length){
	   console.log("daata.token",data.token)
	   uni.navigateTo({
	   	url:'/pages/index/index'
	   })
message.success("登录成功！")
   }else message.error('用户名或密码错误，登录失败！')
}