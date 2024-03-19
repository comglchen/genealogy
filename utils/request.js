import axios from "axios";

//初始化axios实例
var instance =axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000,
    
})

//get方法
export const $get =async (url,params) => {
   let {data}= await instance.get(url,{
        params
    })
    return data
}

//post方法
export const $post =async (url,params) => {
    let {data}= await instance.post(url,params)
     return data
 }

 //put方法
 export const $put =async (url,params) => {
    let {data}= await instance.put(url,params)
 }

 //delete 方法
 export const $delete =async (url,params) => {
    let {data}= await instance.delete(url,{
         params
     })
     return data
 }