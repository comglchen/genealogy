

export const $mypost =  function(url, params) {
	return new Promise((resolve,reject)=>{
		uni.request({
			method:"POST",
			url:url,
			data:{
				username:params.username,
				password:params.password
			},
			success:res=>{
				resolve(res)
			},
			fail:(err)=>{
				console.log("没有成功")
				reject(err)
			}
		})
	})
}




