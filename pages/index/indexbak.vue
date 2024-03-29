<template>
	<view v-cloak>

		<view class="container-all">

			<view class='title'>陈桂芳族系成员检索</view>
			<view class='search-view'>
				<view>
					<input class='search-input' type="text" id="fname" name="fname" placeholder="请输入要搜索的人名"
					v-model="searchname">
				</view>
				<view>
					<button type="primary"  plain="true" @click="search">搜索</button>
				</view>
				
				
			</view>
			<table style='border-collapse:collapse' v-if="context.length">

				<tr>
					<th>照片</th>
					<th>姓名</th>
					<th>简介</th>

					<th>参与编辑</th>
				</tr>


				<tr v-for="(item,index) in context  " :key='index'>
					<td>
						<image :src="item.imgurl" @click="clickImg(item)"></image>
					</td>

					<td> <text v-for="(i,d) in item.name.split('')" :key='d' :style="setColor(i)">{{i}} </text> </td>

					<td><text v-for="(i,d) in item.detail.split('')" :key='d' :style="setColor(i)">{{i}} </text> </td>



					<td><a href="javascript:;" @click="edit(item)"> 编辑意见</a> </td>

				</tr>




			</table>


		</view>

	</view>


</template>


<script>
	import {
		message
	} from 'ant-design-vue'
	export default {
		data() {
			return {
				context: [],
				searchname: '',

				getdatas: ''
			}
		},
		onLoad(op) {

		},
		computed: {

		},
		methods: {

			edit(items) {

				uni.navigateTo({
						url: "/pages/modify/modify?name=" + items.name + "&detail=" + items.detail + "&url=" + items
							.imgurl
					}),
					console.log(name)
			},
			search() {
				if (this.searchname) {
					uni.request({
						url: "http://120.26.48.204:3000/getData?name=" + this.searchname,
						success: res => {
							this.context = res.data
							console.log("this.context--->", this.context)

						}
					})
				} else {
					message.error('请输入搜索关键字！')
				}


			},

			setColor(i) {
				if (this.searchname.indexOf(i) != -1) {
					return 'color:#007aff'
				}
			},
			clickImg(item) {

				uni.previewImage({
					urls: [item.imgurl], //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
					current: 'item.url', // 当前显示图片的http链接，默认是第一个
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
			}
		}
	}
</script>

<style>
	[v-cloak] {
		display: none;
	}

	.title {
		
		font-size: 38px;
		color: beige;
		margin-top: 80px;
	}

	.search-view {
		color: aliceblue;
		margin-top: 80px;
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 350px;
		height:80px;
	}
	button{width:80px;
	height: 40px;
	font-size: 15px;}
	.search-input{
		padding: 15px;
		height: 50px;
		width: 240PX;
		font-size: 15px;
		border:solid 1px royalblue;
		border-radius: 5px;
	}
	image {
		width: 33px;
		height: 53px;
	}

	table,
	th,
	td {
		margin: 50px;
		border: solid 1px;
	}

	.container-all {
		height: auto;
		width: auto;
		background: linear-gradient(to bottom, #11264f, #90d7ec);

		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
	}
</style>