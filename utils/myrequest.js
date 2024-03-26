export const $mypost = function(url, params) {
	return new Promise((resolve, reject) => {
		uni.request({
			method: "POST",
			url: url,
			data: {
				username: params.username,
				password: params.password,
				
			},
			success: res => {
				resolve(res)
			},
			fail: (err) => {
				console.log("没有成功")
				reject(err)
			}
		})
	})
}


// export const $setToken = function(token) {

// 	uni.request({
// 		url: 'http://120.26.48.204:3000/login',
// 		method: "POST",
// 		header: {
// 			'Access-Control-Expose-Headers','token'
// 			'token': token
// 		},

// 		success: (res) => {

// 			console.log(res)
// 		},
// 		fail: (err) =>{
// 			consloe.log(err);
// 		}
// 	})

// }