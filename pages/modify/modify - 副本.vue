<template>
	<view class="v-form">
		<view class="">
			<h1>编辑{{modifyName}}相关内容</h1>
		</view>
		<view>
			<form action="">

				this is modify page.......
				<table border='1'>
					<tr>
						<th>图片</th>
						<th>内容</th>
					</tr>
					<tr>
						<td>

							<view class="photoview">
								<image :src="imgsrc" @click="selectImage"></image>
								<a href="javascript:;" @click="uploadimg">上传照片</a>
							</view>

						</td>
						<td><textarea placeholder="请输入要编辑的内容" v-model="modifyDetail" /></td>
					</tr>

				</table>


				<button @click="modify">修改</button>
				<button @click="back">返回</button>
			</form>
			<image src="http://localhost:3000/img/image-1709282987443-320586179.png"></image>
		</view>
	</view>
</template>

<script>
	//import FileSaver from 'file-saver'

	export default {
		data() {
			return {
				modifyName: '',
				imgsrc: '/static/addimages.png',
				modifyDetail: '',
				ename: ''

			}
		},
		onLoad(op) {
			this.imgsrc = op.url
			this.ename = op.ename
			this.modifyName=op.name
			this.modifyDetail = op.detail
			console.log("in onload.................", op.ename)
		},
		methods: {

			show() {
				uni.request({
					url: '/modify',
					method: 'POST',
					data: {
						name: 'tom',
						age: 32
					},

					success: (res) => {
						console.log("why>>>>>>>>>>>", res.data)
						this.modify = res.data
					}
				})
			},
			selectImage() {
				uni.chooseImage({
					count: 1,
					//sizeType: ['compressed'],
					//sourceType: ['album'],
					success: res => {

						this.imgsrc = res.tempFilePaths[0]
						this.imageName = res.tempFiles[0].name
						console.log("..........", JSON.stringify(res.tempFiles[0].name))


					}
				})
			},
			uploadimg() {

				const filePath = this.imgsrc; // 获取用户选择的第一张图片
				let dat = {
					'imageName': this.imageName,
					'imgPrName': this.ename
				}

				uni.uploadFile({
					url: 'http://120.26.48.204:3000/upload', // CentOS服务器地址及API路由
					filePath: filePath,


					name: 'image', // 指定上传参数名称（根据自己的情况修改）
					formData: {
						dat: JSON.stringify(dat)
					},
					//header:{'content-type': 'multipart/form-data'} ,
					success: (res) => {


						uni.showToast({
							title: '上传成功',

							icon: 'success'
						})

					},
					fail: (err) => {
						uni.showToast({
							title: '上传失败！',

							icon: 'fail'
						});

						// 这里可以对错误进行处理或者展示提示信息等操作
					}
				});




			},
			modify() {




				uni.request({
					url: 'http://120.26.48.204:3000/modify',
					method: "post",
					data:{
							modifyDetail:this.modifyDetail,
							modifyName:this.modifyName
						},
					success: (res) => {
						console.log(res)
						
						uni.showToast({
							title: '上传成功',

							icon: 'success'
						})
					},

					fail: (err) => {
						uni.showToast({
							title: '上传失败！',

							icon: 'fail'
						});

					}
				})

			},





		
		back(e) {
			this.$store.commit('setGlobalData', "myvalue....")
			uni.navigateBack({

			})
		}


	}
	}
</script>

<style>
	image {
		height: 100px;
		width: 100px;
	}

	textarea {
		height: 50px;
		width: 800px;
	}

	.v-form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
	}

	image {
		width: 66px;
		height: 106px;
	}

	table,
	th,
	td {
		margin: 50px;
		border: solid 1px;
	}

	.photoview {
		display: flex;
		flex-direction: column;
	}
</style>